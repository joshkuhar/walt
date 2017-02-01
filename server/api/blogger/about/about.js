var AboutRouter = require('express').Router();
var About = require('./aboutModel');
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');
var config = require('../../../config/config');

var options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeader();
options.secretOrKey = config.secret;
// opts.audience = "http://localhost:8080";
passport.use(new JwtStrategy(options, function(payload, done) {
    console.log("payload received", payload);
    User.findOne({_id: payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
}));

AboutRouter.post('/dash/about', passport.authenticate('jwt', {session: false}),
	function(req, res) {
	console.log(req.body);
	About.create({about: req.body.about}, function(err, about) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			} 
			res.status(201).json(about);
		});   
    });

AboutRouter.get('/about', function(req, res){
	About.findOne(function(err, about) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			}
			res.status(200).json(about);
		});
	});
AboutRouter.put('/dash/about/:id', passport.authenticate('jwt', {session: false}),
	function(req, res){
	About.findByIdAndUpdate(req.params.id, 
							{$set: {about: req.body.about}}, 
		function(err, about){
			if(err){
				console.log(err);
				return res.status(500).json({
					message: 'Internal Server Error'
				});
			}
			res.status(201).end();
		});
});
//Admin only, not available to user
AboutRouter.delete('/about/:id', //passport.authenticate('jwt', {session: false}),
	function(req, res){
	About.findByIdAndRemove(
		req.params.id, function(err){
			if(err){
				console.log(err);
			}
			res.status(202).end();
		});
});


module.exports = AboutRouter;