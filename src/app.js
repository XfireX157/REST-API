import express from 'express'
import livros from './models/Livro.js'
import db from './Config/dbConnect.js'
import routes from './Routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão '))
db.once("open", () => {
    console.log('A conexão com o banco feita com sucesso')
})

const app = express()
app.use(express.json())
routes(app)

export default app