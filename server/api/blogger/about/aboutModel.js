var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AboutSchema = mongoose.Schema({
	about: {
		type: String,
		unique: true,
		required: true
	}
});

var About = mongoose.model('About', AboutSchema);

module.exports = About;