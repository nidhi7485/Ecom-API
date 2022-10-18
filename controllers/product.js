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
    console.log(req.body)
    const product = await Product.create(req.body)
    console.log(req.body)
    res.status(200).json({ product })
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id: productID } = req.params
    console.log(productID)
    const product = await Product.findOneAndDelete({ _id: productID })
    if (!product) {
      return res.json({ msg: 'invalid ID' })
    }
    res.status(200).json({ message: 'product deleted' })
  } catch (error) {
    console.log(error)
  }
}

const productUpdate = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      quantity: req.query.number,
    })
    // await updated.save();
    // here we are searching for upated product quantity and re assign the value
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(200).json({
        message: 'item id is not found',
      })
    }
    return res.status(200).json({
      message: 'product updated successfull !!',
      data: product,
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAll, createNew, deleteProduct, productUpdate }
