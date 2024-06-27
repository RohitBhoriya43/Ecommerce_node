const Product = require('../models/product.model');

const getProductsService = async () => {
  const products = await Product.find({});
  return {product:products,httpStatus:200};
};

const createProductService = async (data) => {
  const { name, price, description, countInStock } = data;

  const product = new Product({
    name,
    price,
    description,
    countInStock,
  });

  const createdProduct = await product.save();
  return {product:createdProduct,httpStatus:201};
};

module.exports = { getProductsService, createProductService };
