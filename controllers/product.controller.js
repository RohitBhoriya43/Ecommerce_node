const { getProductsService, createProductService } = require("../services/product.service")
const {setErrorResponse} = require("../utils/setErrorResponse")


const getProducts = async (req, res) => {
  try{
    const {product,httpStatus} = await getProductsService()
    return res.status(httpStatus).json(product)
  }catch(err){
    return setErrorResponse(err,res)

  }
};

const createProduct = async (req, res) => {
  try{
    const {product,httpStatus} = await createProductService(req.body)
    return res.status(httpStatus).json(product)
  }catch(err){
    console.log("product create error",err)
    return setErrorResponse(err,res)

  }
};

module.exports = { getProducts, createProduct };
