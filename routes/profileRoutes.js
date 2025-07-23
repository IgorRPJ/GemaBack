const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('isAuthenticated?', req.isAuthenticated());
  console.log('req.user:', req.user);

  if (req.isAuthenticated()) {
    res.json({ user: req.user })
  } else {
    res.status(401).json({ error: 'Não autorizado' })
  }
})


module.exports = router
