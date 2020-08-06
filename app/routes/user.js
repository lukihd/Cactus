const router = require('express').Router();
const { ensureAuthenticated } = require('../models/authCheck')
const userModel = require('../models/user')
const User = require('../schema/user')

/* GET users listing. */
router.get('/', ensureAuthenticated, (req, res, next) => {  
  res.render('user', {
    title: 'Cactus Profile',
    layout: 'session',
    // user informations
    lastname: req.user.lastname,
    firstname: req.user.firstname,
    email: req.user.email,
  }); 
});

router.put('/modify', ensureAuthenticated, (req, res, next) => {
  errorMessage = userModel.modifyHandler(req.body)
  // if an errors is detected then we show an alert and don't send the form
  if (errorMessage.length > 0) {
    res.render('user', {
      errorMessage
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
              req.flash('successMessage', 'Vos informations ont bien été modifiées')
              res.redirect('/user')
            },
            json: () => {res.status(200).send({message: 'successful update'})}  
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
          req.flash('successMessage', 'Votre compte a bien été supprimé')
          res.redirect('/')
        },
        json: () => {res.status(200).send({message: 'acount successfuly deleted'})}
      })
    })
})

module.exports = router;
