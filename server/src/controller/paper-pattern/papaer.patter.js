const papaerPatternController = {};
const papaerPatternRepo = require("../../database/repository/paperPatternRepo");
papaerPatternController.addPapper = async (req, res) => {
  try {
    const { class_id, subject_id, name, data, user_id } = req.body;
    const details = {
      class_id: class_id,
      subject_id: subject_id,
      name: name,
      data: data,
      user_id: user_id,
    };
    const created = await papaerPatternRepo.create(details);
    if (created === null || created === undefined) {
      res.status(501).json({ message: "failed to send " });
    }
    res.status(201).json({ message: "successfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

papaerPatternController.getPatternDataBysubjectClass = async (req, res) => {
  try {
    const { class_id, subject_id } = req.query;
    
    const response = await papaerPatternRepo.getPaperPatternByClassSubject(
      class_id,
      subject_id
    );
    
    return res.status(200).json({ message: "Success", data: response });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "INTENAL SERVER ERROR" });
  }
};
papaerPatternController.getListBytitle = async (req, res) => {
  try {
    const {class_id,subject_id,title}=req.query;
    const response=await papaerPatternRepo.getPaperPatternBytitle(class_id,subject_id,title);
    return res.status(200).json({ message: "Success", data: response });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "INTENAL SERVER ERROR" });
  }
};

papaerPatternController.getPatternList=async(req,res)=>{
  try {
    
    const response=await papaerPatternRepo.getPaperPatternList();
    return res.status(200).json({ message: "Success", data: response });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "INTENAL SERVER ERROR" });
  }
}
module.exports = papaerPatternController;
