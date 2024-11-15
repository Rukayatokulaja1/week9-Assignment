const User = require("../models/userModel");

try {
const user = await User. findById(req.body.id);
if (user) return res.status(404).json({error});
res.status(200).json(user);
} catch (error) {
    
}
module.exports = getUserById