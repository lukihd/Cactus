const router = require('express').Router();
const passport = require('passport')
let User = require('../schema/user')
let Signup = require('../models/signup')
let SignupHandling = require('../models/utils/signupHandling')
let { ensureUnauthenticated } = require('../models/authCheck')

/* GET signin */
router.get('/', ensureUnauthenticated, (req, res, next) => {
  res.render('index', { 
    title: 'Cactus Home',
    errorMessage: req.flash("errorMessage"),
    successMessage: req.flash("successMessage")
  });
});

/* POST signin */
router.post('/', ensureUnauthenticated, (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next)
})

/* GET signup */
router.get('/signup', ensureUnauthenticated, function(req, res, next) {
  res.render('signup', {title: "Cactus Signup"});
});

/* POST signup */
router.post('/signup', ensureUnauthenticated, (req, res, next) => {

  let {lastname, firstname, birthdate, gender, email, emailConfirmation} = req.body
  // handling form signup errors
  errorMessage = SignupHandling.signupHandler(req.body)
  if (errorMessage.length > 0) {
    // if an errors is detected then we show an alert and don't send the form
    res.render('signup', {
      errorMessage,
      lastname,
      firstname,
      birthdate,
      gender,
      email,
      emailConfirmation      
    })
  } else {
    // Check if email already exist
    User.findOne({email: email})
      .then(user => {
        if (user) {
          // email exist
          errorMessage.push('Un compte est déjà associé à cette adresse email')
          res.render('signup', {
            errorMessage,
            lastname,
            firstname,
            birthdate,
            gender,
            email,
            emailConfirmation      
          })
        } else {
          // create user
          Signup.createUser(req.body)
          .then(() => {
            res.format({
              html: () => {
                req.flash('successMessage', 'Vous êtes inscrit ! Vous pouvez maintenant vous connecter')
                res.redirect('/')
              },
              json: () => {res.status(201).send({message: 'success'})}  
            })
          })  
          .catch((err) => {
            console.log(err)
          })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
  }
})

/* GET signout */
router.get('/signout', (req, res) => {
  req.logout()
  req.flash('successMessage', 'Vous êtes bien déconnecté')
  res.redirect('/')
})

module.exports = router;
