import mongoose from "mongoose"

const connectDB = async function(url) {
    try {
        const dbInstance = await mongoose.connect(url)
        console.log('database connection succussful')
    } catch (error) {
        console.log('database connection failed' , error)
    }
}



export default connectDB