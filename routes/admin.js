var express = require('express');
var router = express.Router();

var admin = require('../controller/admincontroller')

router.post('/login',admin.login)
router.post('/addproduct',admin.addproduct)
router.get('/viewproduct',admin.viewproduct)
router.get('/deleteproduct/:id',admin.deleteproduct)
router.post('/updateproduct/:id',admin.updateproduct)

module.exports = router;
