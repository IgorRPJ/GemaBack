const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { nome, biografia, foto_url } = req.body;

  try {
    const nova = await prisma.biografiaGremista.create({
      data: { nome, biografia, foto_url },
    });
    res.json(nova);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar biografia', detalhes: err });
  }
});

router.get('/', async (req, res) => {
  const todos = await prisma.biografiaGremista.findMany();
  res.json(todos);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.biografiaGremista.delete({ where: { id: parseInt(id) } });
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar' });
  }
});

module.exports = router;
