const jwt = require("jsonwebtoken");
const { accessTokenSecret } = require("../../config");

const JWT = {};
JWT.encode = (userDetails) => {
  return jwt.sign(
    {
      user_name: userDetails.first_Name,
      user_id: userDetails.id,
    },
    accessTokenSecret,
    { expiresIn: "2d" }
  );
};

JWT.authenticate = async (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if(bearerHeader ===null || bearerHeader ===undefined) return res.status(401).json({statusCode:401,message:"Unauthorized users"})
  if (typeof bearerToken !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    // if (!tokens) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }

    return jwt.verify(
      bearerToken,
      accessTokenSecret,
      function (err, decoded) {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Unauthorized users",
          });
        }
        req.user = decoded;
        return next();
      }
    );
  }
};
module.exports = JWT;
