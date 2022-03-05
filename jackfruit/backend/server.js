import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import { connectDB } from './config/db.js'

connectDB()

dotenv.config()

const app = express()

app.use(cors({
    origin:process.env.ALLOWED.split(" "),
    methods:["GET","PUT","POST","DELETE"]
}))

const PORT = process.env.PORT || 5000

const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(express.json())

app.use('/api/auth',authRoutes)

app.use('/api/user',userRoutes)

app.get('/',(req,res) => res.send("Jackfruit Task Server"))

app.use(notFound)

app.use(errorHandler)

app.listen(PORT,console.log(`Server running on ${PORT} in ${NODE_ENV} environment`))