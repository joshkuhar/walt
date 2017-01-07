var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = mongoose.Schema({
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
	created_at: {
		type: Date,
		default: Date.now
	},
	categoryId: {
		required: true,
		type: Schema.Types.ObjectId,
		// type: Schema.Types.ObjectId,
		ref: 'Category'
	}
});

var Post = mongoose.model('Post', PostSchema);


module.exports = Post;

