var userRouter = require('express').Router();
var User = require('./userModel');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

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

//create user
userRouter.post('/users', function(req, res) {
	if (!req.body) {
	    return res.status(400).json({
	        message: "No request body"
	    });
    }
    if (!('username' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: username'
        });
    }
    var username = req.body.username;

    if (typeof username !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: username'
        });
    }
    username = username.trim();
    if (username === '') {
        return res.status(422).json({
            message: 'Incorrect field length: username'
        });
    }
    if (!('password' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: password'
        });
    }
    var password = req.body.password;
    if (typeof password !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: password'
        });
    }
    password = password.trim();
    if (password === '') {
        return res.status(422).json({
            message: 'Incorrect field length: password'
        });
    }
    bcrypt.genSalt(10, function(err, salt) {
	    if (err) {
	        return res.status(500).json({
	            message: 'Internal server error'
	        });
	    }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }
            var user = new User({
                username: username,
                password: hash
            });
            user.save(function(err, newUser) {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal server error'
                    });
                }
                return res.status(201).json({username: newUser.username});
            });
        });
    });
});
//user login
userRouter.post('/login', function(req, res){
	 User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            callback(err);
            return;
        }
        if (!user) {
            return res.status(500).json({
                message: 'Incorrect username.'
            });
        }
        if (!req.body) {
            return res.status(400).json({
                message: "No request body"
            });
        }
        if (!('username' in req.body)) {
            return res.status(422).json({
                message: 'Missing field: username'
            });
        }
        var username = req.body.username;

        if (typeof username !== 'string') {
            return res.status(422).json({
                message: 'Incorrect field type: username'
            });
        }
        username = username.trim();
        if (username === '') {
            return res.status(422).json({
                message: 'Incorrect field length: username'
            });
        }
        if (!('password' in req.body)) {
            return res.status(422).json({
                message: 'Missing field: password'
            });
        }
        var password = req.body.password;
        if (typeof password !== 'string') {
            return res.status(422).json({
                message: 'Incorrect field type: password'
            });
        }
        password = password.trim();
        if (password === '') {
            return res.status(422).json({
                message: 'Incorrect field length: password'
            });
        }
        user.validatePassword(req.body.password, function(err, isValid) {
            if (err) {
                return res(500).json({
                	message: 'Internal Error'
                });
            }
            if (!isValid) {
                return res.status(401).json({
                    message: 'Incorrect password.'
                });
            }
            var token = jwt.sign({id: user._id}, options.secretOrKey, {
            	expiresIn: 60*60
            });
            res.status(200).json({success: true,
								  username: user.username,
								  token: token
            });
        });
    });
});


module.exports = userRouter;


