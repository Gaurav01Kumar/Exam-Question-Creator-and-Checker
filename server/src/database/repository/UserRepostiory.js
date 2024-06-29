const apiError = require("../../core/apiError");

const db = require("../models");
const Sequelize = require("sequelize");
const userRepository = {};
//get user by email
userRepository.getUserByEmail = async (email) => {
  try {
    const squelize = await db.createConnection();
    let txn = await sequelize.transaction();
    await squelize.query(`CALL get_user_by_email('${email}', 'results');`, {
      transaction: txn,
    });

    const isUserExist = await sequelize.query("FETCH ALL FROM results;", {
      transaction: txn,
      type: Sequelize.QueryTypes.SELECT,
    });
    await txn.commit();
    db.closeConnection(squelize);
    if (isUserExist.length === 0 || isUserExist === null) {
      return null;
    }

    return isUserExist[0];
  } catch (error) {
    throw error;
  }
};
//repo for get user by email and password
userRepository.getUserByEmailAndPassword = async (email, pwd) => {
  try {
    const squelize = await db.createConnection();
    let txn = await sequelize.transaction();

    await squelize.query(
      `CALL get_user_by_email_password('${email}','${pwd}','user_details');`,
      {
        transaction: txn,
      }
    );

    const currentUser = await sequelize.query("FETCH ALL FROM user_details;", {
      transaction: txn,
      type: Sequelize.QueryTypes.SELECT,
    });

    if (currentUser === null && currentUser === undefined) {
      return null;
    }
    await txn.commit();
    await db.closeConnection(squelize);

    return currentUser[0];
  } catch (error) {
    throw error;
  }
};
userRepository.createAccount = async (userDetails) => {
  try {
    const squelize = await db.createConnection();
    let txn = await sequelize.transaction();

    await squelize.query(
      `CALL create_user('${userDetails.email}', '${userDetails.pwd}', '${userDetails.first_name}', '${userDetails.institue_name}', '${userDetails.user_name}','${userDetails.institue_name}','${userDetails.role}', 'users_details');`,
      { transaction: txn }
    );

    // Fetch data from the refcursor
    const savedUser = await sequelize.query('FETCH ALL IN "users_details";', {
      transaction: txn,
    });

    await txn.commit();
    await db.closeConnection(sequelize);
    return savedUser[0][0];
  } catch (error) {
    throw new apiError.errorResponse(error);
  }
};
module.exports = userRepository;
