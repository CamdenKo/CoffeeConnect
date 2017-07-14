'use strict';

var Sequelize = require('sequelize');
var db = require('../index.js');

var User = db.define('user', {
  name: Sequelize.STRING,
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-photo.jpg'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  googleId: Sequelize.STRING,
}, {
  scopes: {
    // populated: () => ({
    //   include: [{
    //     model: db.model('story'),
    //     attributes: {exclude: ['paragraphs']}
    //   }]
    // })
  }
});

module.exports = User;
