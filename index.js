import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { StockData } from './assets/StockData.js';

const app = express();
// env configuration
dotenv.config()
const { PORT } = process.env

app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}));

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