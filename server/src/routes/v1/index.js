const router=require("express").Router();
const userRoute=require("./User/UserRoute");
const companyRoute=require("./paper.pattern");
const payment=require("./payment/index");
const paperRoute=require("./paper.pattern")
const classSubjectRoute=require("./classSubject")
router.use("/user",userRoute);
//router.use("/company",companyRoute)
router.use("/payment",payment)
router.use("/paper",paperRoute)
router.use("/",classSubjectRoute)
module.exports=router;