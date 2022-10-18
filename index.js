require('dotenv').config()
const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const port = process.env.PORT || 8000

const productRoute = require('./routes/product')
app.get('/', (req, res) => {
  res.send('home page')
})

app.use('/products', productRoute)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is running on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
