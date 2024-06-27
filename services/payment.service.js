const express = require("express")
const nock = require("nock")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const Order = require("../models/order.model")
const User = require("../models/user.model")
const Payment = require("../models/payment.model")

// nock("https://api.stripe.com").post("/v1/charges").reply(200,{
//         id:"charge_id",
//        status:"succeeded",
//    })

// stripeAPI.post("/v1/charges").reply(200,{
//     id:"charge_id",
//     status:"succeeded",
// })




const createCharge = async (data)=>{
    try{
        const {user_id,order_id,totalPrice} = data
        let user = await findByUserWithId(user_id)

        // console.log("user.email",user.email)
        let order = await findByOrderWithId(order_id)
        let payment = await findByPaymentWithOrserId(order_id)

        const res = await stripe.charges.create({
            amount:Math.ceil(Number(totalPrice)),
            // amount:Number(totalPrice),
            currency:"usd",source:"tok_visa"
            })
        // console.log("payment",res)
        payment=  new Payment({
            user:user._id,
            order:order._id,
            payment_id: res.id,
            transaction_id:res.balance_transaction,
            payment_status: res.status,
            payment_method: res.payment_method,
            payment_type: res.payment_method_details.type,
            payment_amount: res.amount,
            payment_currency: res.currency,
            payment_date: ""+new Date(),
            payment_receipt_url:res.receipt_url,
            email_address: user.email,
            isPaid: res.paid,
        })
        payment = await payment.save()
        order.order_status = "completed"
        order.is_payment = true
        await order.save()
        // console.log("payment obj",payment)
        return payment.populate("order")
        // console.log("payment",charge)
    }catch(err){
        // console.log("payment failed",err)
        throw new Error(err.message)

    }
    // try{
    //     // const response = await stripeAPI.post('/v1/charges',{amount,currency,source}).reply(200,{
    //     //         id:"charge_id",
    //     //         status:"succeeded",
            
    //     // }) 
    //     const res = await fetch("https://api.stripe.com/v1/charges",{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             amount,currency,source
    //         })
    //     })

    //     console.log("response",res)
    //     const data = await res.json()
    //     return data
    //     // const response = await stripeAPI.intercept({
    //     //     method:'POST',
    //     //     path:'/v1/charges',
    //     //     body:{amount,currency,source}
            
    //     // }).reply(200,{
    //     //     id:"charge_id",
    //     //     status:"succeeded",
    //     // })
    //     // console.log("response",response)
    //     // return response.body
    // }catch(err){
    //     console.log("payment failed",err)
    // }
} 

const findByUserWithId = async(id)=>{
    const user = await User.findById(id)
    console.log("user",user)
    if (!user){
        throw new Error("Invalid user id")
    }
    return user
}
const findByOrderWithId = async(id)=>{
    const order = await Order.findById(id)
    console.log("order",order)
    if (!order){
        throw new Error("Invalid order id")
    }
    return order
}

const findByPaymentWithOrserId = async(id)=>{
    const payment = await Payment.findOne({order:id})
    console.log("payment",payment)
    if (payment){
        throw new Error("Payment is already completed")
    }
    return payment

}


const getPaymentByIdService = async(order_id,payment_id) =>{
    if (!payment_id){
        const payment = await Payment.findOne({order:order_id}).populate("order")
        if (!payment){
            throw new Error("No Payment is order id")
        }
        return payment
    }
}



// app.get("/api/v1/charge",async (req,res)=>{
//     // let charge = await stripe(5000,'usd',"tok_visa")
//     try{
//     const charge = await stripe.charges.create({
//         amount: 1099,
//         currency: 'usd',
//         source: 'tok_visa',
//       });
//     console.log("payment",charge)
//     res.status(200).json(charge)
//     }catch(err){
//         console.log("payment failed",err)

//     }
// })
module.exports = {createCharge,getPaymentByIdService}
