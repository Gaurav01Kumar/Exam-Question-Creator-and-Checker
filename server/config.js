const dotenv=require("dotenv");
dotenv.config();
module.exports={
    port: process.env.PORT,
    DBURL: process.env.DEV_DATABASE_URL,
    DB_USER: process.env.DB_USER,
    DB_PORT: process.env.DB_PORT,
    DB_PWD: process.env.DB_PWD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_SCHEMA: process.env.DB_SCHEMA,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    logDirectory: process.env.LOG_DIR,
    environment: process.env.NODE_ENV, 
}