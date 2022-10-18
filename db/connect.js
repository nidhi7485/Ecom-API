const mongoose = require('mongoose')

const connectDB = async (url) => {
  await mongoose.connect(url)
  console.log('connected to db')
}

module.exports = connectDB
