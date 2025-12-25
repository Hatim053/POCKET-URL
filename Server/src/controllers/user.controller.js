import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'




const options = {
      httpOnly: true,
  secure: true,       
  sameSite: 'none',
  path : "/" 
}
const generateAccessToken = async function(user) {
    const accessToken = user.generateAccessToken()
    return { accessToken }
}

const handleUserSignup = async function(req , res) {
try {
    const {email , name , password} = req.body
    if(!email || !name || !password) {
        return res.
    status(404)
    .json({
        status : 404,
        message : 'email , name and password all are required',
    })
    }

    // check if the user already exist
    const existingUser = await User.findOne({email : email})
    if(existingUser) {
        return res
        .status(405)
        .json({
            status : 405,
            message : 'user already exist'
        })
    }
    
    const user = await User.create({
        email,
        name,
        password,
    })

    if(! user) {
    return res
    .status(500)
    .json({
        status : 501,
        message : 'something went wrong',
    })
}

console.log(user)
return res
.status(201)
.json({
    status : 201,
    message : 'user registered successfully'
})

} catch (error) {
    console.log('error' , error)
}
}

const handleUserLogin = async function(req , res) {
try {
    const {email , password} = req?.body
    if(!email || !password) {
        return res
        .status(404)
        .json({
            status : 404,
            message : 'email and password required',
        })
    }
    const user = await User.findOne({email : email})
    if(!user) {
        return res
        .status(405)
        .json({
            status : 405,
            message : 'no such user exist'
        })
    }
    const validatePassword = await user.isPasswordCorrect(password)
    if(! validatePassword) {
        return res
        .status(406)
        .json({
            status : 406,
            message : 'wrong password entered'
        })
    }
    const {accessToken } = await generateAccessToken(user)
    const updatedUser = await User.findById(user._id).select("-password") 
     console.log(accessToken)
        return res
        .status(200)
        .cookie('accessToken' , accessToken , options)
        .json({
            status: 200,
            user: updatedUser,
            message: 'loggedIn successfully'
        })
     
} catch (error) {
  console.log('error' , error)  
}
}

const handleUserLogout = async function(req , res) {
try {
   return res
   .clearCookie('accessToken')
   .status(200)
   .json({
    status : 200,
    message : 'user loggedOut successfully',
   })

} catch (error) {
    console.log('error' , error)
}
}

export {
    handleUserLogin,
    handleUserSignup,
    handleUserLogout,
}