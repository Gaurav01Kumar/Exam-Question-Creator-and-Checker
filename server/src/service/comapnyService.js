
const companyRepository = require("../database/repository");
const paperPatternService = {};
paperPatternService.createPaperPattern = async (requestBody) => {
  try {
    const createdPaper = await companyRepository.createComapny(requestBody);

    exists = true;
    return createdPaper;
  } catch (error) {
    throw error;
  }
};
paperPatternService.getCompanyList = async () => {
  try {
    const lists = await companyRepository.getCompanyList();
    return lists;
  } catch (error) {
    throw error;
  }
};

module.exports = paperPatternService;
