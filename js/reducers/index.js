var actions = require('../actions/index');

var initialState = {
	title: "",
	blog: "",
	content: ""
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.UPDATE_BLOG) {
		return {
			title: state.title,
			blog: action.blog
		}
	}
	else if (action.type === actions.UPDATE_TITLE) {
		return {
			title: action.title,
			blog: state.blog
		}
	}
	else if (action.type === actions.SAVE_BLOG) {
		return {
			title: state.title,
			blog: state.blog,
			savedBlog: {title: action.title, blog: action.blog}
			// title: state.title,
			// line: action.line
		}
	}
	else if (action.type === actions.GET_SUCCESS) {
		return {
			title: action.title,
			content: action.content
		}
	}

	return state;
};

exports.blogReducer = blogReducer;