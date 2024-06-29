const { statusCode, constants } = require("../../core/constants");
const apiError = require("../../core/apiError");
const userService=require("../../service");
const hashUtil=require("../../core/hashUtil")
const userController = {};
userController.login = async (req, res) => {
  try {
    const {email,pwd}=req.body;
    const requestBody={
      "email":email,
      "pwd":pwd
    };
    
    const currentUser=await userService.loginService(requestBody);
    if(currentUser!==null && currentUser !==undefined){
      return res.status(statusCode.HTTP_SUCCESS).json({message:"login success",data:currentUser.user,token:currentUser.token})
    }
    return res.status(statusCode.NOT_FOUND).json({statusCode:statusCode.NOT_FOUND,message:constants.USER_NOT_FOUNDS})
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER).json({message:"INTERNAL_SERVER Error"})
  }
};
userController.signup = async (req, res) => {
  try {
    const {email,pwd,first_name,last_name,role,institue_name,username}=req.body;
    const hashPassword=await hashUtil.encrypt(pwd)
    const requestBody={
        "email":email,
        "pwd":hashPassword,
        "first_name":first_name,
        "last_name":last_name,
        "role":role,
        "institue_name":institue_name,
        "username":username
    }
    
    const user=await userService.signUpService(requestBody)
    if(user===statusCode.CONFLICT){
      return res.status(statusCode.CONFLICT).json({message:"User already exists"})
    }
    if(user===null){
        return res.statu(statusCode.UNPROCESSABLE).json({message:"Unprocessable data"})
    }
    return res.status(statusCode.CREATED).json({message:"created new user",data:user.user,token:user.token})
  } catch (error) {
    return new apiError.errorResponse(error, res);
  }
};
module.exports=userController