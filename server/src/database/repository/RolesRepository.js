const apiError = require("../../core/apiError");

const db = require("../models");
const Sequelize = require("sequelize");
const roleRepository = {};
//get user by email
roleRepository.getRoleByName = async (role_name) => {
  try {
    const squelize = await db.createConnection();
    let txn = await sequelize.transaction();
    await squelize.query(
      `CALL get_role_by_name('${role_name}', 'role_details');`,
      {
        transaction: txn,
      }
    );

    const isRoleExist = await sequelize.query("FETCH ALL FROM role_details;", {
      transaction: txn,
      type: Sequelize.QueryTypes.SELECT,
    });
    await txn.commit();
    db.closeConnection(squelize);
    if (isRoleExist.length === 0 || isRoleExist === null) {
      return null;
    }

    return isRoleExist[0];
  } catch (error) {
    throw error;
  }
};
roleRepository.getRoleById = async (id) => {
  try {
    const squelize = await db.createConnection();
    let txn = await sequelize.transaction();
    await squelize.query(`CALL get_role_by_id('${id}', 'role_details');`, {
      transaction: txn,
    });

    const isRoleExist = await sequelize.query("FETCH ALL FROM role_details;", {
      transaction: txn,
      type: Sequelize.QueryTypes.SELECT,
    });
    await txn.commit();
    db.closeConnection(squelize);
    if (isRoleExist.length === 0 || isRoleExist === null) {
      return null;
    }

    return isRoleExist[0];
  } catch (error) {
    throw error;
  }
};

roleRepository.createRole = async (roleDetails) => {
  try {
    const squelize = await db.createConnection();
    let txn = await sequelize.transaction();

    await squelize.query(
      `CALL create_user('${roleDetails.name}',  'role_details');`,
      { transaction: txn }
    );

    // Fetch data from the refcursor
    const savedRole = await sequelize.query('FETCH ALL IN "role_details";', {
      transaction: txn,
    });

    await txn.commit();
    await db.closeConnection(sequelize);
    return savedRole[0][0];
  } catch (error) {
    throw new apiError.errorResponse(error);
  }
};

roleRepository.updateRole = async (id, role_name) => {
  try {
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();
    await sequelize.query(
      `CALL update_role('${id}','${role_name}','role_details');`,
      {
        transaction,
      }
    );
    const updatedCompany = await sequelize.query(
      "FETCH ALL FROM rolde_details;",
      {
        transaction,
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    await transaction.commit();
    await db.closeConnection(sequelize);
    if (updatedCompany[0] === null || updatedCompany[0] === undefined) {
      return null;
    }
    return updatedCompany[0];
  } catch (error) {
    throw error;
  }
};

comapnyRepository.getRoleList = async () => {
  try {
    const sequelize = await db.createConnection();
    const transaction = await sequelize.transaction();
    await sequelize.query(`CALL getRoleList('role_list'); `, {
      transaction,
    });
    const roleList = await sequelize.query("FETCH ALL FROM role_list", {
      transaction,
      type: Sequelize.QueryTypes.SELECT,
    });
    await transaction.commit();
    await db.closeConnection(sequelize);
    return roleList;
  } catch (error) {}
};
module.exports = roleRepository;
