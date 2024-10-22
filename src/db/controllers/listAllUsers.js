const User = require("../models/userModel");

async function listAllUsers(req,res) {
    try {
        const allUsers =await User.findAll()
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = listAllUsers