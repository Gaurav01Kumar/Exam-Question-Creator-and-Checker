const router=require("express").Router();
const {classController,subjectController}=require("../../../controller/classSubject")
router.get("/classes",classController.getClass)
router.post("/classes/add",classController.addClass)
router.post("/subjects/add",subjectController.addSubject)
router.get("/subjects",subjectController.getSubject)
module.exports=router;