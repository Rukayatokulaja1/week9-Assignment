const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");

userRouter.post("/addUser",addUser);

module.exports = userRouter;