const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
   'staffs',
  {
    StaffID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    StaffEmail: {
      type: Sequelize.STRING
    },
    StaffFName: {
      type: Sequelize.STRING
    },
    StaffLName: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },

  {
    timestamps: false
  }
  
)
