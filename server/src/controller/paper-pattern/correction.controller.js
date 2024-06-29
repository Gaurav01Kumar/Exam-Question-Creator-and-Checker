
const vision = require("@google-cloud/vision");
const stringSimilarity = require("string-similarity");
const resultRepo=require("../../database/repository/resultRepo")
//  const Configuration =require("openai")
//  const OpenAIApi =require("openai")
// const configuration = new Configuration({
    

// });
//const openai = new OpenAIApi(configuration);
const correctionController = {};
const CRENDITIALS = JSON.parse(
  JSON.stringify({
    type: "service_account",
    project_id: "tutor-swan",
  
    private_key:
      "",
    client_email: "",
    client_id: "",
    auth_uri: "",
    token_uri: "",
    auth_provider_x509_cert_url: "",
    client_x509_cert_url:
      "",
    universe_domain: "googleapis.com",
  })
);

// //const upload = multer({ storage: storage }).single('image'); // Use upload as middleware
// async function compareAnswers(teacher_answer, student_answer) {
//   const prompt = `Teacher: ${teacher_answer}\nStudent: ${student_answer}\nHow similar are the answers? Give me marks for the student based on how relevant his answer is compared to teacher based on scale of 0-100. Here I just want score from 0-100 nothing else. Just give a number no words to be used.`;

//   const score = await openai.completions.create({
//     model: "text-davinci-003",
//     prompt: prompt,
//   });

//   const marks = score.data.choices[0].text;
//   return marks;
// }
correctionController.getMarks = async (req, res) => {
  try {
    const CONFIG = {
      credentials: {
        private_key: CRENDITIALS.private_key,
        client_email: CRENDITIALS.client_email,
      },
    };

    const client = new vision.ImageAnnotatorClient(CONFIG);
     const {answer,minMarks,maxMarks}=req.body
    const image = req.files.file.data;

    const [result] = await client.textDetection(image); // Use uploadedImage.path

    if (result.textAnnotations && result.textAnnotations.length > 0) {
      const textAnnotations = result.textAnnotations[0].description;
      
      const textPredict = await stringSimilarity.compareTwoStrings(
        answer,
        textAnnotations
      );

      if (textPredict === 1) {
        return res.status(200).json({ marks: maxMarks });
      } else if (textPredict >= 0.01 && textPredict < 1) {
        return res.status(200).json({ marks: minMarks, data: textAnnotations });
      }

      return res.status(200).json({ marks: 0 });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};
correctionController.addResult=async(req,res)=>{
  try {
    const {class_id,subject_id,name,roll,division,data,totalMarks,percentage,percentile}=req.body;
    const resultPayload={
      class_id,subject_id,name,roll,division,data,totalMarks,percentage,percentile
    }
    const results=await resultRepo.create(resultPayload);
    if(results!==undefined|| results!==null){
      return res.status(201).json({message : "created",data:results})
    }
    
  } catch (error) {
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}
correctionController.getResults=async(req,res)=>{
  try {
    const response=await resultRepo.getPaperPatternList();
    return res.status(200).json({data:response})
  } catch (error) {
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}
module.exports = correctionController;
