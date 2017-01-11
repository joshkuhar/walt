var UserRouter = require('express').Router();
var User = require('./userModel');

UserRouter.post('/users', function(req, res) {
	User.create({
		username: req.body.username,
		password: req.body.password
	}, 
	function(err){
		if(err){
			return res.json({
				message: 'Internal Server Error'
			});
		}
		return res.status(201).json({message: "created"});
	});
});

UserRouter.get('/user', function(req, res){
	res.json({message: "i worked"});
});


module.exports = UserRouter;