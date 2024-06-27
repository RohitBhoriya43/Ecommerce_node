const express = require('express');
const { paymentCreateController,paymentGetController } = require('../controllers/payment.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/pay').get(paymentCreateController)
router.route('/get/:order_id').get(protect,paymentGetController)


module.exports = router;
