const Task = require('../models/Task');
const User = require('../models/User');
module.exports.create = async function (req, res) {
   const userId=req.user._id;
   const createdTask = new Task({...req.body,user:userId});
   await createdTask.save();
   const user = await User.findById(req.user._id);
   user.tasks.push(createdTask._id);
   await user.save();
   return res.status(200).json({
      message: 'task created !',
      newTask: createdTask
   })
}

module.exports.update = async function (req, res) {
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
   await updatedTask.save();
   return res.status(200).json({
      message: 'done !',
      updatedTask: updatedTask
   })
}
module.exports.delete = async function (req, res) {

   await Task.deleteOne({ _id: req.params.id });
   const user = await User.findById(req.user._id);
   user.tasks = user.tasks.filter((taskId) => taskId.toString() != req.params.id.toString());
   await user.save();
   return res.status(200).json({
      message: 'task deleted !',
   })
}

module.exports.getAllTasks = async function (req, res) {
   try {
      const tasks = await Task.find({ user: req.user._id });
      console.log('all tasks _> '+tasks)
      return res.status(200).json({
         message: 'done !',
         tasks: tasks
      })
   } catch (error) {
      console.log('Error while fetching all tasks : '+error);
      return res.status(500).json({
         message: 'Eror !',
         tasks: []
      })
   }
}