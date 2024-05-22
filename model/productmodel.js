var mongoose = require('mongoose');

var productschema = new mongoose.Schema({
    pro_name:{
        type:String
    },
    pro_price:{
        type:Number
    },
    pro_detail:{
        type:String
    },
    pro_rating:{
        type:String
    }
})

module.exports = mongoose.model('product',productschema)