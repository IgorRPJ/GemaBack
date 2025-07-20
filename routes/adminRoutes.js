const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../middlewares/auth')

router.get('/admin', ensureAuthenticated, (req, res) => {
  res.send('Área admin protegida')
})

module.exports = router
