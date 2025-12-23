import app from './app.js'
import connectDB from './src/db/index.js'
import 'dotenv/config'

const port = process.env.PORT;
const url = process.env.MONGODB_URL



connectDB(url).then((res) => {
app.listen(port , () => {
    console.log(`server is running on port ${port}`)
})
})


