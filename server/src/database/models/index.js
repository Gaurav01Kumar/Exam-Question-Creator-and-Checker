const config = require('../../../config');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);


const db = {};
//let sequelize;
let options = {
  dialect:'postgres',
  host: config.DB_HOST,
  port: config.DB_PORT,
  logging: false,
  dialectOptions: {
    prependSearchPath: true,
  },
  pool: {
    max: 10,
    min: 0,
    idle: 1000,
    acquire: 10000,
    evict: 10000,
    handleDisconnects: true
  },
  // searchPath: config.DB_SCHEMA,
};
db.createConnection = async function () {
  console.log("database conncected")
  return sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PWD, options);
}
db.closeConnection = async function (sequelize) {
  return await sequelize.close();
}

db.init = async function (schemaName) {
  //initialisation stuff here
  schemaName = schemaName === undefined ? 'scenario_composer' : schemaName;
  options.searchPath = schemaName;
  sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PWD, options);
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;
