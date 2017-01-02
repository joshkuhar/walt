var actions = require('../actions/index');
var Data = require('../mock-data');
var DummyBlogs = require('../mock-data-loader');

var initialState = {
	about: "I'm the about placeholder",
	test: "I'm the test and I worked",
	title: "",
	blog: "",
	content: "",
	category: "-----",
	categories: Data.categories,
	dummyBlogs: DummyBlogs,
	blogs: [{blogPost: {title: "foofoo"}},{blogPost: {title: "barbar"}}]
		//blog: state.blogs[0].blogPost.title
		
	
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
	else if (action.type === actions.BLOG_LOAD_SUCESS) {
		return {
			blogs: action.blogs
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
	else if(action.type === actions.GET_BLOGS_SUCCESS) {
		return {
			about: state.about,
			test: state.test,
			blogs: action.blogs
		}
	}

	return state;
};

exports.blogReducer = blogReducer;