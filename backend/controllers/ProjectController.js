const Project = require('../models/Project');
const User = require('../models/User');
module.exports.create = async function (req, res) {
   console.log('data get in create project : ' + JSON.stringify(req.body));
   const userId = req.user._id;
   const createdProject = new Project({ ...req.body, user: userId });
   await createdProject.save();
   const user = await User.findById(req.user._id);
   user.projects.push(createdProject._id);
   await user.save();
   return res.status(200).json({
      message: 'created Project !',
      newProject: createdProject
   })
}

module.exports.update = async function (req, res) {
   const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
   await updatedProject.save();
   return res.status(200).json({
      message: 'done !',
      updatedProject: updatedProject
   })
}
module.exports.delete = async function (req, res) {

   await Project.deleteOne({ _id: req.params.id });
   const user = await User.findById(req.user._id);
   user.projects = user.projects.filter((taskId) => taskId.toString() != req.params.id.toString());
   await user.save();
   return res.status(200).json({
      message: 'Project deleted !',
   })
}

module.exports.getAllProjects = async function (req, res) {
   try {
      const projects = await Project.find({ user: req.user._id });
      return res.status(200).json({
         message: 'done !',
         projects: projects
      })
   } catch (error) {
      console.log('Error while fetching all projects : ' + error);
      return res.status(500).json({
         message: 'Error !',
         projects: []
      })
   }
}
module.exports.getProject = async function (req, res) {
   try {
      const project = await Project.findOne({_id:req.params.id });
      console.log('params id _> ' + req.params.id);
      console.log('get project _> ' + project);

      return res.status(200).json({
         message: 'done !',
         project: project
      })
   } catch (error) {
      console.log('Error while fetching project : ' + error);
      return res.status(500).json({
         message: 'Eror !',
         project: undefined
      })
   }
}