const {Sequelize} = require("sequelize");

function connection() {
    try {
        const connection = new Sequelize(process.env.MYSQL_URI);
        connection.authenticate();
        console.log("Successfully connected to database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;