const db = require("../models");
const Sequelize = require("sequelize");

const classRepo = {};
const subjectRepo={}

classRepo.getPaperPatternByClassSubject = async (class_id, subject_id) => {
  try {
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();
    await sequelize.query(
      `CALL get_paper_patterns_by_subject_class('${class_id}','${subject_id}','results')`,
      {
        transaction,
      }
    );
    const company = await sequelize.query("FETCH ALL FROM results", {
      transaction,
      type: Sequelize.QueryTypes.SELECT,
    });
    await transaction.commit();
    await db.closeConnection(sequelize);

    if (company[0] === null || company[0] === undefined) {
      return null;
    }
    return company;
  } catch (error) {
    throw error;
  }
};

classRepo.createClass = async (classDetails) => {
  try {
    
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();

    await sequelize.query(
      `CALL create_class('${classDetails.name}','class_details');`,
      {
        transaction,
      }
    );
    const savedPaperPattern = await sequelize.query(
      "FETCH ALL FROM class_details;",
      {
        transaction: transaction,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    transaction.commit();
    await db.closeConnection(sequelize);
   
    if (savedPaperPattern === null || savedPaperPattern === undefined) {
      return null;
    }
    return savedPaperPattern;
  } catch (error) {
    throw error;
  }
};
subjectRepo.createSubject = async (subjectDetails) => {
    try {
      
      const sequelize = await db.createConnection();
      const transaction = await sequelize.transaction();
  
      await sequelize.query(
        `CALL create_subject('${subjectDetails.name}','subject_details');`,
        {
          transaction,
        }
      );
      const savedPaperPattern = await sequelize.query(
        "FETCH ALL FROM subject_details;",
        {
          transaction: transaction,
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      transaction.commit();
      await db.closeConnection(sequelize);
     
      if (savedPaperPattern === null || savedPaperPattern === undefined) {
        return null;
      }
      return savedPaperPattern;
    } catch (error) {
      throw error;
    }
  };
  
  //   try {
  //     const sequelize = await db.createConnection();
  //     const transaction = await sequelize.transaction();
  //     await sequelize.query(`CALL paper_patterns_list('paper_patterns_data'); `, {
  //       transaction,
  //     });
  //     const paperPatternList = await sequelize.query(
  //       "FETCH ALL FROM paper_patterns_data",
  //       {
  //         transaction,
  //         type: Sequelize.QueryTypes.SELECT,
  //       }
  //     );
  //     await transaction.commit();
  //     await db.closeConnection(sequelize);
  //     return paperPatternList;
  //   } catch (error) {}
  // };
  subjectRepo.getSubjectList = async () => {
    try {
      const sequelize = await db.createConnection();
      const transaction = await sequelize.transaction();
      await sequelize.query(`CALL subject_list('subject_data'); `, {
        transaction,
      });
      const paperPatternList = await sequelize.query(
        "FETCH ALL FROM subject_data",
        {
          transaction,
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      
      await transaction.commit();
      await db.closeConnection(sequelize);
      console.log(paperPatternList)
      return paperPatternList;
    } catch (error) {}
  };
  classRepo.getClassList = async () => {
    try {
      const sequelize = await db.createConnection();
      const transaction = await sequelize.transaction();
      await sequelize.query(`CALL class_list('class_data'); `, {
        transaction,
      });
      const paperPatternList = await sequelize.query(
        "FETCH ALL FROM class_data",
        {
          transaction,
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      
      await transaction.commit();
      await db.closeConnection(sequelize);
      return paperPatternList;
    } catch (error) {}
  };
module.exports = {classRepo,subjectRepo};
