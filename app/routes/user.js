const router = require('express').Router();
const { ensureAuthenticated } = require('../config/auth')
const { update, modifyHandler } = require('../models/user')
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
  errors = modifyHandler(req.body)
  // if an errors is detected then we show an alert and don't send the form
  if (errors.length > 0) {
    res.render('user', {
      errors
    })
  } else {
    // check if information stored are same as submited
    User.findOne({email: req.user.email})
      .then((user) => {
        update(req.user.email, req.body, user)
        .then(() => {
          console.log('hello')
          res.format({
            html: () => {
              req.flash('success_message', 'Vos informations ont bien été modifiées')
              res.redirect('/user')
            },
            json: () => {res.status(201).send({message: 'success'})}  
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
})

router.delete('/delete')

module.exports = router;
