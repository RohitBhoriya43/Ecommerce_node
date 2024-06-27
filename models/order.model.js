const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    
    orderItems:[ 
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price:{type: Number, required: true},
        product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },

      }],
    order_status:{type:String,required:true,default:"Pending"},
    is_payment:{type:Boolean,default:false},
    itemsPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
