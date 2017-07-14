'use strict';

var Sequelize = require('sequelize');

var db = require('../index');

var Meeting = db.define('meeting', {
  name: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATEONLY,
    default: Sequelize.NOW,
  },
  notes: {
    type: Sequelize.TEXT,
  },
}, {
});

module.exports = Meeting;
