const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

// load User model
const User = require('../schema/user')

module.exports= (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({email: email})
        .then((user) => {
          if (!user)
            return done(null, false, {message: 'le mot de passe ou l\'adresse email ne correspondent pas'})
           // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err
            if (isMatch)
              return done(null, user)
            else
              return done(null, false, {message: 'le mot de passe ou l\'adresse email ne correspondent pas'})
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}