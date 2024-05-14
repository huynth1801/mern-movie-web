import express, { Request, Response } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import http from 'http'
import dotenv from "dotenv";
import mongoose from "mongoose";

// configures dotenv to work in your application
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const PORT = process.env.PORT || 4000;

const server = http.createServer(app)

mongoose.connect(process.env.MONGODB_URL!).then(() => {
    console.log('Mongodb is connected');
    server.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
    process.exit(1)
})