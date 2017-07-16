const router = require('express').Router()

var HttpError = require('../utils/HttpError');

const db = require('../db')
const Person = db.models.person

console.log(Person)
router.param('id', function(req,res,next,id){
  Person.findById(id)
  .then(person => {
    if(!person) throw HttpError(404)
    req.requestedPerson = person
    next()
    return null
  })
  .catch(next)
})

router.post('/', function(req,res,next){
  console.log(Person, req.body)
  Person.create(req.body)
  .then(person => res.status(201).json(person))
})

module.exports =router
