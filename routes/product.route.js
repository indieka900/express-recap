const express = require("express");
const router = express.Router();
const { createProduct,updateProduct,deleteProduct,getProducts,getProduct } = require('../controllers/product.controller.js')

//POST
router.post('/product',createProduct)

//GET
router.get('/products/', getProducts)
router.get("/product/:id", getProduct)

//PUT
router.put('/product/:id', updateProduct)

//DELETE
router.delete('/product/:id', deleteProduct)

module.exports = router