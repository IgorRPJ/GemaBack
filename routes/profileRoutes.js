const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user })
    } else {
        res.status(401).json({ error: 'Não autorizado' })
    }
})

module.exports = router
