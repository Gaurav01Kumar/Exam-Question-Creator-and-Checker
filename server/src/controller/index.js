const userController = require("./user/userAuth");
//const comapnyController = require("./company");
const makePayment=require("./payment/payment")
module.exports = {
  login: userController.login,
  signup: userController.signup,
  //addCompany: comapnyController.addNewComapny,
 // companyLists: comapnyController.getCompanyList,

  makePayment:makePayment
};
