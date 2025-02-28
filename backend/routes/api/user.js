const passport=require('passport')
const express=require('express');
const router=express.Router();
const UserController = require('../../controllers/UserController')

router.get('/get-user',passport.authenticate('jwt', {session:false}),UserController.getUser)
router.post('/create-user',UserController.createUser)
router.post('/create-session',UserController.createSession)

module.exports=router