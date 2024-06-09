const  express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const p_router = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//router
app.use("/api", p_router)


//insomnia === postman

app.get('/', (req, res) =>{
    res.send("Hello from node api new one")
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