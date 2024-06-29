const router = require("express").Router();
const userController = require("../../../controller");
router.post("/sign-up", userController.signup);
router.post("/login", userController.login);

module.exports = router;
