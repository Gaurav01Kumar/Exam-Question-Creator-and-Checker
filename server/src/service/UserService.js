
const apiError = require("../core/apiError");
const userRepository = require("../database/repository");
const hashUtil=require("../core/hashUtil");
const JWT=require("../core/JWT");
const { statusCode } = require("../core/Constants");
const userService = {};

userService.signupService = async (requestBody) => {
  try {
    const isUserAlreadyExists = await userRepository.getUserByEmail(
      requestBody.email
    );

    if (isUserAlreadyExists === null) {
      const user = await userRepository.create(requestBody);
      if (user === null || user === undefined || user.length === 0) {
        return null;
      }
      const token =await JWT.encode(user);
      return {user,token};
    }

    return statusCode.CONFLICT;
  } catch (error) {
    throw new apiError.errorResponse(error);
  }
};

userService.loginService = async (requestBody) => {
  try {

    const currentUser = await userRepository.getUserByEmail(requestBody.email);
    
    if (currentUser !== null) {
      const isMatched=await hashUtil.decrypt(requestBody.pwd,currentUser.pwd)
      
      if(isMatched){
        const user=await userRepository.getUserByEmailAndPassword(currentUser.email,currentUser.pwd);
        
        if(user!==null){
          const token =await JWT.encode(user);
          return {user,token};
        }
      }
    }
    return null;
  } catch (error) {
    throw error;
  }
};
module.exports = userService;
