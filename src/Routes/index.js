import express from 'express'
import LivrosRoutes from '../Routes/LivrosRoutes.js'

const routes = (app) => {
    app.use(
        express.json(),
        LivrosRoutes
    )
}

export default routes