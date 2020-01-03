const router = require('express').Router();
let User = require('../schema/user')
let Signup = require('../models/signup')
let SignupHandling = require('../models/utils/signupHandling')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', {title: "Cactus Signup"});
});

router.post('/', (req, res, next) => {
  let {lastname, firstname, birthdate, gender, email, emailConfirmation} = req.body

  // handling form errors
  errors = SignupHandling.signupHandler(req.body)
  if (errors.length > 0) {
    // if an errors is detected then we show an alert and don't send the form
    res.render('signup', {
      errors,
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
          errors.push('Un compte est déjà associé à cette adresse email')
          res.render('signup', {
            errors,
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
                req.flash('success_signup_message', 'Vous êtes inscrit ! Vous pouvez maintenant vous connecter')
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
  }
})

module.exports = router;
