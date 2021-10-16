const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    codeCategory: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },  
    description: {
      type:  String,
      require: true,
      maxlenght: 150
    }
});

module.exports = mongoose.model("Category", categorySchema);

