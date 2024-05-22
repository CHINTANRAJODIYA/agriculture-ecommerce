const billmodel = require("../model/billmodel");
const cartmodel = require("../model/cartmodel");
const productmodel = require("../model/productmodel");
const usermodel = require("../model/usermodel");
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.register = async (req,res)=>{
    var data = await usermodel.create(req.body);

    res.status(200).json({
        status:"register success"
    })

}

exports.login = async (req,res)=>{
    
    var data = await usermodel.find({"email":req.body.email});
    
    if(data.length>0){
        if(data[0].password==req.body.password)
        {
        res.status(200).json({
            status:"login success"
        })
        }else
        {
            res.status(200).json({
                status:"Check Your Email And Password"
            }) 
        }
    }else
    {
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.allproducts = async (req,res)=>{
    var products = await productmodel.find().select();

    res.status(200).json({
        status:"view all procuct",
        products
    })
}

exports.singleproduct = async (req,res)=>{
    var id = req.params.id;
    var products = await productmodel.findById(id).select();

    res.status(200).json({
        status:"product selected",
        products
    })
}

exports.addcart = async (req,res)=>{
    var id = req.params.id;
    var products = await productmodel.findById(id).select();

    req.body.pro_name = products.pro_name;
    req.body.pro_price = products.pro_price;
    req.body.pro_rating = products.pro_rating;
    req.body.pro_detail = products.pro_detail;
    
    
    var cart = await cartmodel.create(req.body);

    res.status(200).json({
        status:"cart added",
        cart
    })
}

exports.cartbill = async (req,res)=>{
    var products = await cartmodel.find();
    console.log(products)
    var total_amount=0;
    for(const product of products){
        total_amount=total_amount+product.pro_price
    }
    req.body.total_amount = total_amount;
    
    var bill = await billmodel.create(req.body);

    res.status(200).json({
        status:"bill generate",
        bill
    })
}