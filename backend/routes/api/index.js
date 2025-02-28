const express=require('express');
const router=express.Router();

router.use('/task',require('./task'))
router.use('/user',require('./user'))
router.use('/project',require('./project'))

module.exports=router