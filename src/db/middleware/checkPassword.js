const bcrypt = require("bcrypt");
const {Op} = require("sequelize");
const User = require("../models/userModel");
async function checkPassword(req,res,next) {
    try {
        if (!req.body.email) {
            req.body.email = "";
        }
        if (!req.body.username) {
            req.body.username = "";
        }
        const userDetails = await User.findOne({
            where: {[Op.or]: [{email: req.body.email}, {username: req.body.username}]}}
        )
        console.log(userDetails);
        if (!userDetails) {
            res.status(404).send("username/email and password do not match");
            return;
        }
        plainTextPassword = req.body.password;
        hashedPassword = userDetails.dataValues.password;
        console.log(hashedPassword);
        const output = await bcrypt.compare(plainTextPassword,hashedPassword);
        console.log(output);
        if (!output) {
            res.status(404).send("username/email and password do not match");
            return;
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
module.exports = checkPassword;