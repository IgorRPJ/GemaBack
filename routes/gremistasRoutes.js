const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { ensureAuthenticated } = require('../middlewares/auth')

router.get('/', ensureAuthenticated, async (req, res) => {
    try {
        const gremistas = await prisma.biografiaGremista.findMany()
        res.json(gremistas)
    } catch (err) {
        res.status(500).json({ error: 'erro ao buscar gremista', details: err.message })
    }
})

router.post('/', ensureAuthenticated, upload.single('foto'), async (req, res) => {
    const { nome, biografia } = req.body
    let foto_url = req.file ? req.file.path : null

    try {
        const novoGremista = await prisma.biografiaGremista.create({
            data: { nome, biografia, foto_url }
        })
        res.json({ success: true, gremista: novoGremista })
    } catch (err) {
        res.status(500).json({ error: 'erro ao criar gremista', details: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        await prisma.biografiaGremista.delete({ where: { id } })
        res.json({ success: true })
    } catch (err) {
        if (err.code === 'P2025') {
            res.status(404).json({ error: 'gremista nao encontrado', details: err.message })
        } else {
            res.status(500).json({ error: 'erro ao deletar gremista', details: err.message })
        }
    }
})

module.exports = router
