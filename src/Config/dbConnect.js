import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gusta01:252525@alura.t5tij1c.mongodb.net/alura-node")

const db = mongoose.connection

export default db