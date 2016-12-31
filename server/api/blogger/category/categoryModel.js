var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = mongoose.Schema({
	category: {
		type: Object,
		unique: true,
		required: true
	},
	blogPosts: [{
		type: Schema.Types.ObjectId,
		ref: 'Blog'
	}]
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;	

