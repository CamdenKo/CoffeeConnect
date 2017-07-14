var router = require('express').Router();
const User = require('../users/user.model')

//email password
router.post('/', (req,res,next) => {
  User.findOne({where: req.body})
  .then(user => {
    if(user){
      req.login(user,function(err){
        if(err) return next(err)
        return res.json(user)
      })
      res.json(user)
    } else {
      res.sendStatus(401)
    }
  })
  .catch(next)

})

module.exports = router
