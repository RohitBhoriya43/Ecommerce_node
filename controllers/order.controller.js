const { addOrderItemsService, getOrderByIdService } = require('../services/order.service');
const {setErrorResponse} = require("../utils/setErrorResponse")

const addOrderItems = async (req, res) => {
  try{
    const {data,httpStatus} = await addOrderItemsService(req.body,req.user)
    return res.status(httpStatus).json(data)
    // return res.status(201).json(addOrderItemsService(req.body))
  }catch(err){

    return setErrorResponse(err,res)

  }
};

const getOrderById = async (req, res) => {
  try{
    const {order,httpStatus} = await getOrderByIdService(req.params.id)
    return res.status(httpStatus).json(order)
    // return res.status(200).json(getOrderByIdService(req.body))
  }catch(err){
    return setErrorResponse(err,res)
  }
};
module.exports = { addOrderItems, getOrderById };
