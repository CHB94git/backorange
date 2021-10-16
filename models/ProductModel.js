const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = mongoose.Schema({
    category: {
        type: Schema.ObjectId, ref: 'category'
    },
    codeProduct: String,
    name: String,
    price: Number,
    src: String,
    stock: Number,
    category: String,
    description: String
});

module.exports = mongoose.model("Product", productSchema);

