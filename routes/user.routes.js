import { Router } from "express"
import {handleUserLogin , handleUserSignup , userLogin , userSignup} from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.get('/signup' , userSignup)
userRouter.get('/login' , userLogin)


userRouter.post('/registerUser' , handleUserSignup)
userRouter.post('/loginUser' , handleUserLogin)

export default userRouter

