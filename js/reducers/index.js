var actions = require('../actions/index');

var initialState = {
	text: ""
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_TEXT) {
		return {
			text: action.text
		}
	}
	if (action.type === actions.LINE) {
		return {
			text: state.text,
			line: action.line
		}
	}

	return state;
};

exports.blogReducer = blogReducer;