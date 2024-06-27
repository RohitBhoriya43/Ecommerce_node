const Order = require('../models/order.model');
const {ClientErrorResponse} = require("../utils/errors")


const addOrderItemsService = async (data,user) => {
    console.log("user",user)
  const { orderItems, itemsPrice, totalPrice } = data;
  let globalData= {
    order:{isError:true,},
    
    httpStatus:400
}

  if (orderItems && orderItems.length === 0) {
    globalData.order.errors=["No order items"]
    return globalData
    // throw new ClientErrorResponse('No order items',400);
  } else {
    const order = new Order({
      orderItems,
      user: user._id,
      itemsPrice,
      totalPrice,
    });



    const createdOrder = await order.save();

    let payment_url = `${process.env.CUSTOM_PAYMENT_URL}?order_id=${createdOrder._id}&user_id=${user._id}&totalPrice=${totalPrice}`
    return {data:{order:createdOrder,payment_url},httpStatus:201};
  }
};

const getOrderByIdService = async (id) => {
  const order = await Order.findById(id).populate('user', 'name email');

  if (order) {
    return {order:order,httpStatus:200};
  } else {
    return {order:{
        isError:true,
        errors:["invalid order id"]
    },
    httpStatus:400
}
    // throw new ClientErrorResponse('Order not found');
  }
};

module.exports = { addOrderItemsService, getOrderByIdService };
