var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostSchema = mongoose.Schema({
	blogPost: {
		content: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		category: {
			required: true,
			type: Schema.Types.ObjectId,
			// type: Schema.Types.ObjectId,
			ref: 'Category'
		}
	}
});

var Blog = mongoose.model('Blog', BlogPostSchema);


module.exports = Blog;

