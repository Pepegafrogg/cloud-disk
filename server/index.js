const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require('./routes/auth.routes')
const app = express()
const corsMiddleware = require('./middleware/cors.middleware.js')
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
   try {
      mongoose.connect(config.get('dbUrl'))

      app.listen(PORT, () => {
         console.log('server', PORT)
      })

   } catch (error) {

   }
}
start()