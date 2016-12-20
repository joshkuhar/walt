var actions = require('../actions/index');

var initialState = {
	text: ""
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_TEXT) {
		console.log(action.text);
		return {
			text: action.text
		}
	}

	return state;
};

exports.blogReducer = blogReducer;