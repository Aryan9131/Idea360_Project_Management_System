const passport=require('passport')
const express=require('express');
const router=express.Router();
const ProjectController = require('../../controllers/ProjectController')

router.post('/create-project',passport.authenticate('jwt', {session:false}),ProjectController.create)
// router.get('/task/:id',TaskController.getTask)
router.post('/update-project/:id',passport.authenticate('jwt', {session:false}),ProjectController.update)
router.delete('/delete-project/:id',passport.authenticate('jwt', {session:false}),ProjectController.delete)
router.get('/get-projects',passport.authenticate('jwt', {session:false}),ProjectController.getAllProjects)

module.exports=router