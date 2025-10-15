import {getUser} from '../utils/auth.js'
const authenticateUser = async function(req , res , next) {
const token = req.cookies?.token
if(!token) { 
   return res.redirect('/user/login')
}
const user = await getUser(token)
if(! user) {
   return  res.redirect('/user/signup')
}
req.user = user
next()
}

const authorizeUser =   function (roles = []) {
   return function (req , res , next) {
const user = req.user // before this authenticate middleware ran so it include the user object in the req object

if(! user) {
   return res.redirect('/user/login')
}
if(! roles.includes(user.role)) {
return res.render('../view/unAuthorized.ejs')
}
next() // give user access to the requested service
   }
}

export {
    authenticateUser , authorizeUser
}

