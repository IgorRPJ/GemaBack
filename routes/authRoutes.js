const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ensureAdmin } = require('../middlewares/auth')
require('dotenv').config()

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect(`${process.env.FRONTEND_URL}?login=success`)
    }
)

router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) {
            return next(err)
        }
        console.log('Usuário deslogado com sucesso')
        res.redirect(`${process.env.FRONTEND_URL}?logout=success`)
    })
})

router.get('/admin-area', ensureAdmin, (req, res) => {
  res.json({ msg: 'Bem vindo, admin!' })
})

module.exports = router
