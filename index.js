import express from 'express'
import dotenv from 'dotenv'

const app = express();
// env configuration
dotenv.config()
const { PORT } = process.env


app.get("/", (req, res) => {
    res.send("Hello from STOCK-PARSER-SERVER")
})

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server running on http://localhost:${PORT}/`)
    }
})