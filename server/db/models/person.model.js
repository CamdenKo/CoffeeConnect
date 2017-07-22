'use strict';
const PersonNode = require('../../utils/PersonTree.js')
var Sequelize = require('sequelize');

var db = require('../index');

var Person = db.define('person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  linkedIn: {
    type: Sequelize.STRING,
  },
  workPhone: {
    type: Sequelize.STRING,
  },
  cellPhone: {
    type: Sequelize.STRING,
  },
  jobDescription: {
    type: Sequelize.TEXT,
  },
  generalNotes: {
    type: Sequelize.TEXT,
  },
}, {
  getterMethods: {
    node(){
      return new PersonNode(this) //TODO: convert this to sequelize only
    }
  }
});

module.exports = Person;
