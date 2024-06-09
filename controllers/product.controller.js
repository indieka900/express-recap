const Product = require('../models/product.model.js')

//create product
const createProduct = async (req, res) => {
    try {
       const product =  await Product.create(req.body)
       res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

//get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//get a product
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//update product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if (!product){
            return res.status(404).json({message: "Product not found"});
        }

        const updated_product = await Product.findById(id)
        res.status(200).json(updated_product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message:"Product deleted succesfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {getProducts,getProduct,createProduct,updateProduct,deleteProduct}