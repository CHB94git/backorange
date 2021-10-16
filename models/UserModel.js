const mongoose = require('mongoose');
const { Schema } = mongoose;

var validateEmail = function(email){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({

    nameUser: {
        type: String,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        maxlength: 70,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        maxlength: 100,
        required: true
    },
    role: {
        type: String,
        maxlength: 25,
        required: true,
        enum: ['Administrador', 'Usuario', 'Vendedor']
    },
    
    state: {
        type: Number,
        default: 1
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model('users', userSchema);
 
module.exports = User;