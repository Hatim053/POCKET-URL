import { Router } from "express"
import { handleUserLogin , handleUserLogout , handleUserSignup } from '../controllers/user.controller.js'
import { authenticateUser } from '../middlewares/Authentication.js'
const userRouter = Router()


userRouter.post('/login' , handleUserLogin)
userRouter.post('/signup' , handleUserSignup)
userRouter.post('/logout' , authenticateUser , handleUserLogout)


export default userRouter

