const userRepository=require("./UserRepostiory");
const paperPatternRepo=require("./paperPatternRepo")
module.exports={
    create:userRepository.createAccount,
    getUserByEmail:userRepository.getUserByEmail,
    getUserByEmailAndPassword:userRepository.getUserByEmailAndPassword,
    createPaperPattern:paperPatternRepo.create,
    getPaperPatternByClassSubject:paperPatternRepo.getPaperPatternByClassSubject,
    getCompanyById:paperPatternRepo.getCompanyById,
    getCompanyList:paperPatternRepo.getPaperPatternList,
    updateCompany:paperPatternRepo.updateCompany,
    deleteCompany:paperPatternRepo.deleteCompany
}