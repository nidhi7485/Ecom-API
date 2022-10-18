const express = require('express')
const router = express.Router()
const { getAll } = require('../controllers/product')

router.get('/', getAll)

module.exports = router
