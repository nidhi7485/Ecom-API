const express = require('express')
const router = express.Router()
const { getAll, createNew } = require('../controllers/product')

router.get('/', getAll)
router.post('/', createNew)
module.exports = router
