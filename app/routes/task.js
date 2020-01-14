const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('tasks', {
    title: "Cactus Tasks"
  })
})

module.exports = router


