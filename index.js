const  express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

app.use(express.json())



//insomnia === postman

app.get('/', (req, res) =>{
    res.send("Hello from node api new one")
});

app.post('/api/products', async (req, res) => {
    try {
       const product =  await Product.create(req.body)
       res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

});

app.get('/api/products/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

mongoose.connect("mongodb+srv://jose:KTGWIGJLzkSacGvA@food.bcrens6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=food")
.then(()=>{
    console.log("Connected to the database");
    app.listen(3000, ()=>{
        console.log("Server is running in port 3000");
    })
})
.catch(()=>{
    console.log("Connection failed");
})