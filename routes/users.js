var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

router.post('/',user.register)
router.post('/login',user.login)
router.get('/allproducts',user.allproducts)
router.get('/singleproduct/:id',user.singleproduct)
router.post('/addcart/:id',user.addcart)
router.post('/cartbill',user.cartbill)


module.exports = router;
