'use strict';

var router = require('express').Router();

var HttpError = require('../utils/HttpError');

const db = require('../db')
const User = db.models.user

router.param('id', function (req, res, next, id) {
  User.findById(id)
  .then(function (user) {
    if (!user) throw HttpError(404);
    req.requestedUser = user;
    next();
    return null;
  })
  .catch(next);
});

// router.get('/', function (req, res, next) {
//   User.findAll({})
//   .then(function (users) {
//     res.json(users);
//   })
//   .catch(next);
// });

router.post('/', function (req, res, next) {
  User.create(req.body)
  .then(function (user) {
    res.status(201).json(user);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  res.json(req.requestedUser)
});

router.put('/:id', function (req, res, next) {
  req.requestedUser.update(req.body)
  .then(function (user) {
    res.json(user);
  })
  .catch(next);
});

router.delete('/:id', function (req, res, next) {
  req.requestedUser.destroy()
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
