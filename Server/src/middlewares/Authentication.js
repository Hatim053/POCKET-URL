import jwt from 'jsonwebtoken'
import User from '../models/user.models.js'

const authenticateUser = async function(req , res , next)  {
    const token = req.cookies?.accessToken
    if(! token) {
        return res
        .status(404)
        .json({
            status : 404,
            message : 'access token not found',
        })
    }
    const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    if(! decodedToken) {
        return res
        .status(404)
        .json({
            status : 404,
            message : 'access token expired',
        })
    }
    const user = await User.findById(decodedToken._id).select("-password -refreshToken")
    if(! user) {
        return res
        .status(405)
        .json({
            status : 405,
            message : 'no user exist'
        })
    }
    req.user = user
    next()
}

export { authenticateUser }