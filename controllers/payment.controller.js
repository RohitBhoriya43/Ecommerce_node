const { createCharge ,getPaymentByIdService} = require("../services/payment.service")
const {setErrorResponse} = require("../utils/setErrorResponse")

const paymentCreateController = async(req,res) =>{
    try{
        const data = await createCharge(req.query)
        return res.status(201).json(data)
      }catch(err){
        return setErrorResponse(err,res)
    
      }
}

const paymentGetController = async(req,res) =>{
    try{
        const data = await getPaymentByIdService(req.params.order_id,null)
        return res.status(201).json(data)
      }catch(err){
        return setErrorResponse(err,res)
    
      }
}

module.exports = {paymentCreateController,paymentGetController}