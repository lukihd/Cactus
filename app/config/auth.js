module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated())
      return next();
    req.flash('error_message', 'Vous devez vous connecter pour accéder à cette page') 
    res.redirect('/')
  },

  ensureUnauthenticated: (req, res, next) => {
    if (req.isAuthenticated())
      res.redirect('/user')
    else
      return next()
  }
}