const Sequelize = require("sequelize");
// to use .env file
require("dotenv").config();

let sequelize;

// if statement necessary to deploy database to internet
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // sequelize call to create connection to our local db
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      // where the database lives in my computer
      port: 3306,
    }
  );
}

module.exports = sequelize;
