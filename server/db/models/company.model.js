'use strict';

var Sequelize = require('sequelize');

var db = require('../index');

var Company = db.define('company', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type: Sequelize.STRING,
  },
}, {
});

module.exports = Company;
