const adminmodel = require("../model/adminmodel");
const productmodel = require("../model/productmodel");

exports.login = async (req,res)=>{
    
    var data = await adminmodel.find({"email":req.body.email});
    
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

exports.addproduct = async (req,res)=>{
    var products = await productmodel.create(req.body);

    res.status(200).json({
        status:"product added",
        products
    })
}

exports.viewproduct = async (req,res)=>{
    var products = await productmodel.find().select();

    res.status(200).json({
        status:"view all procuct",
        products
    })
}

exports.deleteproduct = async (req,res)=>{

    var id =req.params.id;
    var products = await productmodel.findByIdAndDelete(id);

    res.status(200).json({
        status:"delete this product",
    })
}

exports.updateproduct = async (req,res)=>{

    var id =req.params.id;
    var products = await productmodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"updated this product",
        products
    })
}