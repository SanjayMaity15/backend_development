import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

app.use('/', (req, res) => {
    res.send('Server is started')
})

app.listen(port, () => {
    console.log("Server is started at PORT :", port);
})


