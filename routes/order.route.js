const express = require('express');
const { addOrderItems, getOrderById } = require('../controllers/order.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.route('/create')
  .post(protect, addOrderItems);

router.route('/:id')
  .get(protect, getOrderById);

module.exports = router;
