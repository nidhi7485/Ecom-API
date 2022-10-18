const Product = require('../models/product')
const getAll = async (req, res) => {
  try {
    const product = await Product.find({})
    res.status(200).json({ totalProduct: product.length, product })
  } catch (error) {
    console.log(error)
  }
}
const createNew = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    console.log(req.body)
    res.status(200).json({ msg: 'successfully created' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAll, createNew }
