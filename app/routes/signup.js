const express = require('express');
const router = express.Router();
const Signup = require('../models/signup')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', {title: "Cactus Signup"});
});

router.post('/', (req, res, next) => {
  console.log(req.body.lastname)
  Signup.createUser(req.body)
  .then(() => {
    res.format({
      html: () => {res.redirect('/')},
      json: () => {res.status(201).send({message: 'success'})}  
    })
  })
  .catch(next)
})

module.exports = router;
