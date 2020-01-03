const router = require('express').Router();
const { ensureAuthenticated } = require('../config/auth')

/* GET users listing. */
router.get('/', ensureAuthenticated, (req, res, next) => {  
  res.render('user', {
    title: 'Cactus Profile',
    layout: 'session',
    lastname: req.user.lastname,
    firstname: req.user.firstname
  }); 
});

module.exports = router;
