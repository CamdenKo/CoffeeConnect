'use strict';
const PersonNode = require('../../utils/PersonTree.js')
var Sequelize = require('sequelize');

var db = require('../index');

var Person = db.define('person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.TEXT,
  },
  links: {
    type: Sequelize.JSON
  }
}, {
  getterMethods: {
    node(){
      return new PersonNode(this)
    }
  }
});

module.exports = Person;
