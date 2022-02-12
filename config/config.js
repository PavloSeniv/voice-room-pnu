const dotenv = require("dotenv");

dotenv.config({
  path: "server/.env",
});

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};

// import dotenv from "dotenv";

// dotenv.config({
//   path: "server/.env",
// });

// const sequlizeDB = {
//   development: {
//     username: process.env.DB_USER,
//     password: null,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//   },
//   test: {
//     username: "root",
//     password: null,
//     database: "database_test",
//     host: "127.0.0.1",
//     dialect: "postgres",
//   },
//   production: {
//     username: "root",
//     password: null,
//     database: "database_production",
//     host: "127.0.0.1",
//     dialect: "postgres",
//   },
// };

// export default sequlizeDB;
