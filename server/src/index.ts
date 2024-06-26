import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import http from 'http'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes/index'

// configures dotenv to work in your application
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
const PORT = process.env.PORT || 4000
app.use('/api/v1', routes)

const server = http.createServer(app)

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => {
    console.log('Mongodb is connected')
    server.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
    process.exit(1)
  })
