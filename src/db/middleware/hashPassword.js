const bcrypt = require("bcrypt");
require("dotenv").config();
// const dotenv = require("dotenv")
// dotenv.config()

async function hashPassword(req,res,next) {
    try {
        const plainTextPassword = req.body.password;
        const saltRounds = parseInt(process.env.SALT_ROUNDS);
        console.log(req.body);
        console.log(saltRounds);
        const hashedPassword = await bcrypt.hash(plainTextPassword,saltRounds);
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
};

module.exports = hashPassword;