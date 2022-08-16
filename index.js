import express from 'express'
import dotenv from 'dotenv'
import { StockData } from './assets/StockData.js';

const app = express();
// env configuration
dotenv.config()
const { PORT } = process.env


app.get("/", (req, res) => {
    res.status(200).send("Hello from STOCK-PARSER-SERVER")
})

app.get("/data", (req, res) => {
    res.status(200).send(StockData)
})

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server running on http://localhost:${PORT}/`)
    }
})