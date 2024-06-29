const userService = require("./UserService");
const paperPatternService = require("./comapnyService");
module.exports = {
  signUpService: userService.signupService,
  loginService: userService.loginService,
  addNewCompany: paperPatternService.createPaperPattern,
  companiesList: paperPatternService.getCompanyList,
  
};
