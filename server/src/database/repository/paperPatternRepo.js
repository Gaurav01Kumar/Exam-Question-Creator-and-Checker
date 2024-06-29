const db = require("../models");
const Sequelize = require("sequelize");

const papperPattern = {};

papperPattern.getPaperPatternByClassSubject = async (class_id, subject_id) => {
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
papperPattern.getPaperPatternBytitle = async (class_id, subject_id,title) => {
  try {
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();
    await sequelize.query(
      `CALL  get_paper_patterns_by_class_subject_title('${class_id}','${subject_id}','${title}','results')`,
      {
        transaction,
      }
    );
    const createdPapaer = await sequelize.query("FETCH ALL FROM results", {
      transaction,
      type: Sequelize.QueryTypes.SELECT,
    });
    await transaction.commit();
    await db.closeConnection(sequelize);

    if (createdPapaer[0] === null || createdPapaer[0] === undefined) {
      return null;
    }
    return createdPapaer;
  } catch (error) {
    throw error;
  }
};



papperPattern.create = async (paperpatternDetails) => {
  try {
    
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();

    await sequelize.query(
      `CALL create_paper_pattern('${paperpatternDetails.class_id}','${paperpatternDetails.subject_id}','${paperpatternDetails.name}','${paperpatternDetails.data}','${paperpatternDetails.user_id}','paper_pattern_details');`,
      {
        transaction,
      }
    );
    const savedPaperPattern = await sequelize.query(
      "FETCH ALL FROM paper_pattern_details;",
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

papperPattern.getPaperPatternList = async () => {
  try {
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();
    await sequelize.query(`CALL paper_patterns_list('paper_patterns_data'); `, {
      transaction,
    });
    const paperPatternList = await sequelize.query(
      "FETCH ALL FROM paper_patterns_data",
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


module.exports = papperPattern;
