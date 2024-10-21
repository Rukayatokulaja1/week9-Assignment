const {Router} = require("express");
const userRouter = Router();
const hashPassword = require("../../middleware/hashPassword");
const addUser = require("../controllers/addUser");

userRouter.post("/addUser", hashPassword, addUser);

module.exports = userRouter;