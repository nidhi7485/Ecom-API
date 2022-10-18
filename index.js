require('dotenv').config()
const express = require('express')
const app = express()
const notFoundMiddleware = require('./middleware/notFound')
const connectDB = require('./db/connect')
const port = process.env.PORT || 8000

app.use(express.json())
const productRoute = require('./routes/product')

app.get('/', (req, res) => {
  res.send(
    '<h1>link</h1><a href="https://e-com-nik-api.herokuapp.com/products">product link</a>'
  )
})

app.use('/products', productRoute)
app.use(notFoundMiddleware)
const start = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is running on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
