const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const hashPassword = require("../middleware/hashPassword");
const checkPassword = require("../middleware/checkPassword");
const listAllUsers = require("../controllers/listAllUsers");
const login = require("../controllers/login");
const checkToken = require("../middleware/checkToken");

userRouter.post("/addUser", hashPassword ,addUser);
userRouter.get("/listAllUsers", checkToken, listAllUsers);
userRouter.post("/login",checkPassword, login);

module.exports = userRouter;