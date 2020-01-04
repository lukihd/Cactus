const router = require('express').Router();
const { ensureAuthenticated } = require('../config/auth')
const userModel = require('../models/user')
const User = require('../schema/user')

/* GET users listing. */
router.get('/', ensureAuthenticated, (req, res, next) => {  
  res.render('user', {
    title: 'Cactus Profile',
    layout: 'session',
    lastname: req.user.lastname,
    firstname: req.user.firstname
  }); 
});

router.put('/modify', ensureAuthenticated, (req, res, next) => {
  errors = userModel.modifyHandler(req.body)
  // if an errors is detected then we show an alert and don't send the form
  if (errors.length > 0) {
    res.render('user', {
      errors
    })
  } else {
    // check if information stored are same as submited
    User.findOne({email: req.user.email})
      .then((user) => {
        userModel.update(req.user.email, req.body, user)
        .then(() => {
          console.log('hello')
          res.format({
            html: () => {
              req.flash('success_message', 'Vos informations ont bien été modifiées')
              res.redirect('/user')
            },
            json: () => {res.status(201).send({message: 'successful update'})}  
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
})

router.delete('/', ensureAuthenticated,(req, res, next) => {
  userModel.delete(req.user.email)
    .then(() => {
      res.format({
        html: () => {
          req.flash('success_message', 'Votre compte a bien été supprimé')
          res.redirect('/')
        },
        json: () => {res.status(201).send({message: 'acount successfuly deleted'})}
      })
    })
})

module.exports = router;
