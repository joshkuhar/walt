var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostSchema = mongoose.Schema({
	blogPost: {
		title: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		month: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		year: {
			type: String,
			required: true
		},
		categoryId: {
			required: true,
			type: Schema.Types.ObjectId,
			// type: Schema.Types.ObjectId,
			ref: 'Category'
		}
	}
});

var Blog = mongoose.model('Blog', BlogPostSchema);


module.exports = Blog;

