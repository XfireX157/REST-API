import express from 'express'
import LivroController from '../Controllers/LivroController.js'

const router = express.Router()

router
    .get('/', LivroController.listarLivros)
    .get('/livros/:id', LivroController.listarLivroId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.editarLivro)
    .delete('/livros/:id', LivroController.deleteLivros)

export default router