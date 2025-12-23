import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
} , {timestamps : true})


userSchema.pre('save' , async function() {
    if(!this.isModified('password')) return
    this.password = await bcrypt.hash(this.password , 10)

})

userSchema.methods.isPasswordCorrect = async function(password) {
    console.log(password , this.password)
    return await bcrypt.compare(password , this.password)
} 


userSchema.methods.generateAccessToken = function() {
return jwt.sign({
    _id : this._id,
    name : this.name,
},
process.env.ACCESS_TOKEN_SECRET,
{expiresIn : process.env.ACCESS_TOKEN_EXPIRY})
}




const User = mongoose.model('User' , userSchema)




export default User