module.exports.home=function(req, res){
    console.log("home controller called !");
    return res.status(200).json({
        message:'Got it'
    })
}