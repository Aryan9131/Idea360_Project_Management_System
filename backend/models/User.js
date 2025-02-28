const mongoose = require('mongoose');


// Define the main user schema
const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email:  {
        type:String
    },
    password:  {
        type:String
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],  
    avatar:{
        type:Object
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
