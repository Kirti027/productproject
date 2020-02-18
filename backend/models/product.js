const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true, default: "Hello"},
    description: {type: String, required: true,default: "Hello"},
    price: {type: Number, required: true,default: ""},
    company: {type: String, required: true,default: "Hello"},
});
module.exports = mongoose.model('product',productSchema);