import express from 'express'
import urlRoutes from './src/routes/url.routes.js'
import userRouter from './src/routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cookieParser())

app.use(cors({
    origin : `${process.env.CLIENT_SIDE_URL}`,
    methods : ['GET','POST'],
    credentials : true,
}))
app.use(express.json({ limit : '16kb' }))
app.use(express.urlencoded({extended : true , limit : '16kb'}))
app.use(cookieParser())





app.use('/api'  , urlRoutes)
app.use('/user' , userRouter)

export default app