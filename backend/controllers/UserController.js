const User = require('../models/User');
const jwt = require('jsonwebtoken');


module.exports.getUser=async function(req, res){
    const user=await User.findById(req.user._id);

    return res.status(200).json({
        user:user,
        tasks:user.tasks
    })
}
module.exports.createUser = async function (req, res) {
    const newUser = new User(req.body);
    newUser.save();
    return res.status(200).json({
        message: "User created successfully !",
        user: newUser
    })
}

module.exports.createSession = async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || req.body.password != user.password) {
            return res.status(422).json({
                message: "Invalid username/password"
            })
        }
        return res.status(200).json({
            message: "SignIn successful !",
            data: {
                token: jwt.sign(user.toJSON(), "Task_Management", { expiresIn: "1d" })
            }
        })
    } catch (error) {
        console.log("Error while signing in :" + error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
