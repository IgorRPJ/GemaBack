const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ensureAdmin } = require('../middlewares/auth')

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('http://localhost:4200?login=success')
    }
)

router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) {
            return next(err)
        }
        console.log('Usuário deslogado com sucesso')
        res.redirect('http://localhost:4200?logout=success')
    })
})

router.get('/admin-area', ensureAdmin, (req, res) => {
  res.json({ msg: 'Bem vindo, admin!' })
})

module.exports = router
