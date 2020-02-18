const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const prod = require('./models/product');
//app.use((req,res,next) =>{
  //  res.end("Middleware Connected");
    //next();
//})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS")
    next();
});

mongoose.connect('mongodb+srv://product:product@cluster0-ol6ig.mongodb.net/test?retryWrites=true&w=majority',{ useFindAndModify: false,useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log("mongodb Connected");
}).catch(() =>{
console.log("mongodb not connected");
})

app.get('/products',(req,res,next) => {
    const post = prod.find().then(docs => {
        const prod = docs
        res.status(200).json({
            message: "Product Fetched Successfully",
            posts:prod
    });
}).catch(error =>{
    res.status(400).json({
        message: "Product can not be Fetched"
    });
})
})

app.post('/products',(req,res,next) => {
    const prodObj = new prod({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        company: req.body.company

    })
    console.log(prodObj);
    prodObj.save();
    res.status(201).json({
        message: "Product added Seuccessfully."
        
    });

})

app.put('/updateProduct/:product',(req,res,next) => {
    console.log("Updated");
    let body = {
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    }
    prod.findOneAndUpdate({_id: req.params.id},{$set: body},(error,doc,result)=> {
        res.status(202).json({
            message: "Product updated successfully"
        })
    })
})

app.delete('/deleteProduct/:product',(req,res,next) => {
    prod.deleteOne({_id: req.params.id},(error)=> {
        console.log(error);
    }).then(()=>{
        res.status(201).json({
            message: "Product deleted successfully"
        })
    })
})


module.exports = app;