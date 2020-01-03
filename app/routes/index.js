const router = require('express').Router();
const passport = require('passport')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cactus Home'});
});

router.post('/', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/calendar',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next)
})

module.exports = router;
