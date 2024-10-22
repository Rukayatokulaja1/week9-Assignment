const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const hashPassword = require("../middleware/hashPassword");
const checkPassword = require("../middleware/checkPassword");
const listAllUsers = require("../controllers/listAllUsers");

userRouter.post("/addUser", hashPassword ,addUser);
userRouter.post("/listAllUsers", checkPassword, listAllUsers);

module.exports = userRouter;