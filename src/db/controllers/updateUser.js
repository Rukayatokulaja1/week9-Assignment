const User = require("../models/userModel");
async function updateUser(req,res) {
    try {
        const user = await User.update(req.body.id, {nwe: true});
        if (user)return res.status(404).json({error})
        res.stsatus(200).json(user);
    } catch (error) {
        res.status(400).json(error)
        
    }

} 
module.exports = updateUser