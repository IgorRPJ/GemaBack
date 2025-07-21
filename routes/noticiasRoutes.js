const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { ensureAuthenticated } = require('../middlewares/auth')

router.get('/', async (req, res) => {
    try {
        const noticias = await prisma.noticia.findMany()
        res.json(noticias)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar notícias' })
    }
})

router.get('/', (req, res)=>{
    res.send('Servidor no ar!');
})

router.post('/', ensureAuthenticated, upload.single('imagem'), async (req, res) => {
    const { titulo, conteudo, template, autor } = req.body
    let imagem_url = req.file ? req.file.path : null

    try {
        const novaNoticia = await prisma.noticia.create({
            data: { titulo, conteudo, template, autor, imagem_url }
        })
        res.json({ success: true, noticia: novaNoticia })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao criar notícia' })
    }
})

module.exports = router
