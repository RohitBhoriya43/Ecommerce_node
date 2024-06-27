const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    order: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Order' },
    payment_id: { type: String },
    transaction_id:{type:String},
    payment_status: { type: String },
    payment_method: { type: String },
    payment_type: { type: String },
    payment_amount: { type: Number },
    payment_currency: { type: String },
    payment_date: { type: String },
    payment_receipt_url:{type:String},
    email_address: { type: String },
    isPaid: { type: Boolean, required: true, default: false },
}, { timestamps: true });

const Order = mongoose.model('Payment', paymentSchema);

module.exports = Order;
