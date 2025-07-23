require('dotenv').config()
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    return res.status(401).json({ error: 'Não autorizado. Faça login primeiro!' })
  }
  
  function ensureAdmin(req, res, next) {
    if (req.isAuthenticated()) {
      const adminEmail = process.env.ADMIN_EMAIL.toLowerCase()
      const userEmail = req.user.email.toLowerCase()
  
      if (userEmail === adminEmail) {
        return next()
      } else {
        return res.status(403).json({ error: 'Acesso negado. Apenas admin.' })
      }
    }
    return res.status(401).json({ error: 'Não autorizado. Faça login primeiro!' })
  }
  
  module.exports = { ensureAuthenticated, ensureAdmin }
  
