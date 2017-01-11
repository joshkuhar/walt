var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	category: {
		type: String,
		unique: true,
		required: true
	},
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}]
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;	

