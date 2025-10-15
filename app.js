import express from 'express'
import urlRoutes from './routes/url.routes.js'
import ejs from 'ejs'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import {authenticateUser , authorizeUser} from './middlewares/user.auth.js'

const app = express()
app.use(cookieParser())
app.set("view engine" , "ejs")

app.use(express.json({ limit : '16kb' }))
app.use(express.urlencoded())



app.use('/api' , authenticateUser , urlRoutes)
app.use('/user' , userRouter)

export default app