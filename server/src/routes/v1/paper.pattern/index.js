const router=require("express").Router();
const JWT =require("../../../core/JWT");
const papaerPatternController=require("../../../controller/paper-pattern/papaer.patter")
const correctionController=require("../../../controller/paper-pattern/correction.controller")
router.post("/add",papaerPatternController.addPapper);
router.get("/get-pattern-list",papaerPatternController.getPatternList)
router.get("/get-pattern-data",papaerPatternController.getPatternDataBysubjectClass)
router.get("/get-data-title",papaerPatternController.getListBytitle)
router.post("/check-marks",correctionController.getMarks)
router.post("/add-result",correctionController.addResult)
router.get("/get-result-list",correctionController.getResults)
//router.get("/paper-lists",JWT.authenticate,controller.companyLists);
// router.delete("/delete",JWT.authenticate,controller.deleteCompanyList);
// router.put("/update-company",JWT.authenticate,controller.updatedCompany)
module.exports=router;