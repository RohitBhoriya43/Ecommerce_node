const express = require('express');
const { getProducts, createProduct } = require('../controllers/product.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.route('/getAll').get(protect,getProducts)
router.route('/create').post(protect, createProduct);

module.exports = router;
