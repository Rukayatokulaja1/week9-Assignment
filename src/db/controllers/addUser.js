const User = require("../models/userModel");
async function addUser(req,res) {
    try {
        const output = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log(output);
        res.status(200).json({message: `${req.body.username} has been created`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = addUser