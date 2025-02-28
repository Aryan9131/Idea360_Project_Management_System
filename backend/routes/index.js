const express=require('express');
const router=express.Router();
const HomeController = require('../controllers/HomeController')

router.get('/',HomeController.home)
router.use('/api',require('./api'))

module.exports=router