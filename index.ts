import express, { Application } from 'express'
import dotenv from 'dotenv'
import { errorHandler } from './src/middlewares/error-handler.middleware'
import { router } from './src/routes'
import 'express-async-errors'
//For env File
dotenv.config()

const app: Application = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

const port = process.env.PORT || 8000

app.use(router)

app.use(errorHandler)

const server = app.listen(port, () => {
  console.log(`server is started at  http://localhost:${port}`)
})

export default server
