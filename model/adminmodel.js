var mongoose = require('mongoose');

var adminschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    city:{
        type:String
    },
    contact:{
        type:Number
    },
    task:{
        type:String
    }
})

module.exports = mongoose.model('admin',adminschema)