require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER || "admin",
    "password": process.env.DB_PASSWORD || "dUJ*037A",
    "database": process.env.DB_NAME || "solicy-back",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.DB_USER || "admin",
    "password": process.env.DB_PASSWORD || "dUJ*037A",
    "database": process.env.DB_NAME || "solicy-back",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USER || "admin",
    "password": process.env.DB_PASSWORD || "dUJ*037A",
    "database": process.env.DB_NAME || "solicy-back",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
