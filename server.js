require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const passport = require('./config/passport')

const authRoutes = require('./routes/authRoutes')
const gremistasRoutes = require('./routes/gremistasRoutes')
const noticiasRoutes = require('./routes/noticiasRoutes')
const profileRoutes = require('./routes/profileRoutes')
const adminRoutes = require('./routes/adminRoutes')
const biografiasRoutes = require('./routes/biografias.js')



const app = express()
const PORT = process.env.PORT

const origins = [
  'http://localhost:4200',
  'https://gemafront.netlify.app',
  'https://portalgema.netlify.app',
];

app.use(cors({
    origin: origins,
    credentials: true
}))

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

app.use(session({ secret: 'gremistas123', resave: false, saveUninitialized: false }))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', (req, res)=>{
    res.send('Servidor no ar!')
})
app.use('/auth', authRoutes)
app.use('/gremistas', gremistasRoutes)
app.use('/noticias', noticiasRoutes)
app.use('/profile', profileRoutes)
app.use('/admin', adminRoutes)
app.use('/api/biografias', biografiasRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

//escrevendo aqui apenas para ver se há delay na digitação
