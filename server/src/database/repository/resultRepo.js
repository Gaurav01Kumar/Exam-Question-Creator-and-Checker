const resultRepo={};
resultRepo.create = async (resultPayload) => {
    try {
      
      const sequelize = await db.createConnection();
      const transaction = await sequelize.transaction();
  
      await sequelize.query(
        `CALL create_results('${resultPayload.class_id}','${resultPayload.subject_id}','${resultPayload.name}','${resultPayload.roll}','${resultPayload.division}','${resultPayload.data}','${resultPayload.totalMarks}','${paperpatternDetails.percentage}','${resultPayload.percentile}','results_data');`,
        {
          transaction,
        }
      );
      const results = await sequelize.query(
        "FETCH ALL FROM results_data;",
        {
          transaction: transaction,
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      transaction.commit();
      await db.closeConnection(sequelize);
     
      if (results === null || results === undefined) {
        return null;
      }
      return results;
    } catch (error) {
      throw error;
    }
  };
  
  resultRepo.getPaperPatternList = async () => {
    try {
      const sequelize = await db.createConnection();
      const transaction = await sequelize.transaction();
      await sequelize.query(`CALL get_results('results_data'); `, {
        transaction,
      });
      const resultsList = await sequelize.query(
        "FETCH ALL FROM results_data",
        {
          transaction,
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      await transaction.commit();
      await db.closeConnection(sequelize);
      return resultsList;
    } catch (error) {}
  };
  
  
  module.exports = resultRepo;
  