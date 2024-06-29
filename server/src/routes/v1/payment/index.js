const router=require("express").Router();;
const {makePayment}=require("../../../controller")
router.post("/create-checkout-session",makePayment)

module.exports=router;