const  express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("Server is running in port 3000");
})

//insomnia === postman

app.get('/', (req, res) =>{
    res.send("Hello from node api")
});