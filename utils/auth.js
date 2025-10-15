import jwt from 'jsonwebtoken'
import User from '../models/user.models.js'

const secret = 'bguh48y8hg' 

const getUser = async function(token) {
const decodedToken = jwt.verify(token , secret)
const userId = decodedToken._id
const user = await User.findById({_id : userId})
return user;
}

const setUser = function(user) {
const token = jwt.sign({_id : user._id,
    role : user.role,
} , secret)
return token
}


export {
    getUser,
    setUser
}