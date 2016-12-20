require('isomorphic-fetch');

var SAVE_TEXT = 'SAVE_TEXT';
var saveText = function(text){
	return {
		type: SAVE_TEXT,
		text: text
		}
};
exports.SAVE_TEXT = SAVE_TEXT;
exports.saveText = saveText;