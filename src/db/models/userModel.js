const {DataTypes} = require("sequelize");
const connection = require("../connection");

const User = connection.define("User",{
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    }
})

module.exports = User;