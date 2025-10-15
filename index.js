import app from './app.js'
import connectDB from './db/index.js'


const port = 5000;

connectDB('mongodb+srv://hatim:EPIWuRz8CgFMRQIo@urlshortener.5hvvp7i.mongodb.net/?retryWrites=true&w=majority&appName=URLSHORTENER').then((res) => {
app.listen(port , () => {
    console.log(`server is running on port ${port}`)
})
})


