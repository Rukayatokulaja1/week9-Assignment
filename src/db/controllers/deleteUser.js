const User = require("../models/userModel");
async function deleteUser(req,res)  {
    try {
        const user = await user.findByIdAndDelete(req.res.id);
        if (user) return res.status(400).send()
            res.send()
    } catch (error) {
        console.log(error);
          res.status(500).send(error)
        
    }
};

module.exports = deleteUser