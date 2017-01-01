var actions = require('../actions/index');
var Data = require('../mock-data');

var initialState = {
	title: "",
	blog: "",
	content: "",
	category: "-----",
	categories: Data.categories
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.UPDATE_BLOG) {
		return {
			title: state.title,
			category: state.category,
			categories: state.categories,
			blog: action.blog
		}
	}
	else if (action.type === actions.LOAD_SUCCESS) {
		return {
			category: state.category,
			categories: action.categories
		}
	}
	else if (action.type === actions.GET_CATEGORIES_SUCCESS){
		return {
			title: state.title,
			blog: state.blog,
			category: state.category,
			categories: action.categories
		}
	}
	else if (action.type === actions.UPDATE_TITLE) {
		return {
			title: action.title,
			blog: state.blog,
			category: state.category,
			categories: state.categories
		}
	}
	else if (action.type === actions.SELECT_CATEGORY) {
		return {
			category: action.category,
			categories: state.categories,
			title: state.title,
			blog: state.blog
		}
	}
	else if (action.type === actions.POST_BLOG_SUCCESS) {
		return {
			blog: action.data
		}
	}
	else if(action.type === actions.GET_BLOG_TO_EDIT) {
		return {
			title: "Foo",
			categories: state.categories,
			blog: Data.items[2].content
		}
	}
	else if (action.type === actions.GET_SUCCESS) {
		return {
			title: action.title,
			category: action.category,
			content: action.content
		}
	}

	return state;
};

exports.blogReducer = blogReducer;