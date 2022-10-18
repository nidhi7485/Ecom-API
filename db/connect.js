const mongoose = require('mongoose')

const connectDB = async (url) => {
  mongoose.connect(url)
  console.log('connected to db')
}

module.exports = connectDB
