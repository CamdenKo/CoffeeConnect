const api = require('express').Router()

api.use('/user', require('./user.router'))
// api.use('/company', require('./company.router'))
// api.use('/meeting', require('./person.router'))
api.use('/person', require('./person.router'))

api.use(function(req,res){
  res.status(404).end()
})

module.exports = api
