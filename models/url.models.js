import mongoose  from "mongoose"

const urlSchema = new mongoose.Schema({
    shortUrl : {
        type : String,
        required : true,
    },
    redirectUrl : {
        type : String,
        required : true,
    },
    clicks : {
        type : Array,
        default : [],
    }

} , {timestamps : true})



const Url = mongoose.model('Url' , urlSchema)

export default Url