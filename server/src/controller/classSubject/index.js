const classController={};
const subjectController={}
const {classRepo,subjectRepo}=require("../../database/repository/classSubjectRepo")
classController.getClass=async(req,res)=>{
    try {
        const list=await classRepo.getClassList();
        return res.status(200).json({message:"Succes", data:list});
    } catch (error) {
        return res.status(500).json({error:"INTERNAL SERVER ERROR"})
    }
}
classController.addClass=async(req,res)=>{
    try {
        
        const details={
            "name":req.body.name
        }
        const data=await classRepo.createClass(details);
        if(data===null || data===undefined){
            return res.status(500).json({message:"Failed to process"})
        }
        return res.status(201).json({message:"created",data:data})
    } catch (error) {
        return res.status(500).json({error:"INTERNAL SERVER ERROR"}) 
    }
}
subjectController.addSubject=async(req,res)=>{
    try {
        
        const details={
            "name":req.body.name
        }
        const data=await subjectRepo.createSubject(details);
        if(data===null || data===undefined){
            return res.status(500).json({message:"Failed to process"})
        }
        return res.status(201).json({message:"created",data:data})
    } catch (error) {
        return res.status(500).json({error:"INTERNAL SERVER ERROR"}) 
    }
}
subjectController.getSubject=async(req,res)=>{
    try {
        const list=await subjectRepo.getSubjectList();
        
        return res.status(200).json({message:"Succes", data:list});
    } catch (error) {
        return res.status(500).json({error:"INTERNAL SERVER ERROR"})
    }
}
module.exports={classController,subjectController}