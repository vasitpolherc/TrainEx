const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('demoweb2', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  queueLimit : 0, // unlimited queueing
  connectionLimit : 0, // unlimited connections 

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
