const bcrypt=require("bcrypt");
const SALT = '$2b$10$zxrIaQyDx2isnZ2aU6nkxO';
const hashUtils={};
hashUtils.encrypt=(encrpytString)=>{
    
    return bcrypt.hashSync(encrpytString,SALT)
}

hashUtils.decrypt=(encrptedPassword,userPassword)=>{
    return bcrypt.compare(encrptedPassword,userPassword);
}
module.exports=hashUtils;