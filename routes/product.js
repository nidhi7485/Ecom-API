const express = require('express')
const router = express.Router()
const {
  getAll,
  createNew,
  deleteProduct,
  productUpdate,
} = require('../controllers/product')

router.get('/', getAll)
router.post('/', createNew)
router.route('/:id').delete(deleteProduct)
router.route('/:id/update_quantity').patch(productUpdate)
module.exports = router
