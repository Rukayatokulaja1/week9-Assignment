const jwt =require("jsonwebtoken");
require("dotenv").config();
const User = require("../db/models/userModel");

async function checktoken(req,res,next) {
    try {
        const secretKey = process.env.JWT_SECRET_KEY
        const token = req.header("Authorization").replace("Bearer ", "")
       const decodedToken = jwt.verify(token,secretKey);
        console.log(decodedToken);
        const username = decodedToken.username
      //  now to doubl
     const findResponse = await User.findOne({where:{
        username: username
      }})
      if (!findResponse) {
        throw new Error("user no longer in database accessdenied")
    
      } else {
        req.body.username = username
        req.body .email = decodedToken.email
        next();
        
      }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
        
    }
}
module.exports = checktoken