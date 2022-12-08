import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, result) => {
            if(err) res.status(401).json(err)
            res.status(200).json(result)
        })
    }

    static listarLivroId = (req, res) => {
        const {id} = req.params

        livros.findById(id, (err, result) => {
            if(err) {
                res.status(400).json({msg: "Esse livro não existe"})
            }else {
                res.status(200).json({msg: "O livro que você buscou foi esse:", result})
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err){
                res.status(500).send({msg: `${err.message} - falha ao cadastrar livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static editarLivro = (req, res) => {
        const {id} = req.params

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "livro atualizado com sucesso"})
            }else {
                res.status(500).send({messagem: err.message})
            }
        })
    }

    static deleteLivros = (req, res) => {
        const {id} = req.params
        
        livros.findByIdAndRemove(id , (err, result) => {
            if(err){
                res.status(401).send({message: "Este livro não existe"})
            }else {
                res.status(200).json({message: `Livro deletado com sucesso!`})
            }
        })
    }
}

export default LivroController