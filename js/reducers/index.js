var actions = require('../actions/index');
var Data = require('../mock-data');
var DummyBlogs = require('../mock-data-loader');

var initialState = {
	about: "",
	test: "I'm the test and I worked",
	title: "",
	blog: "",
	content: "",
	category: "",
	categories: Data,
	dummyBlogs: DummyBlogs,
	blogs: [{_id: "111", blogPost: {title: "foo", month: "Jan", date: "1", year: "2016"}}]
	//blog: state.blogs[0].blogPost.title
		
	
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.UPDATE_BLOG) {
		return {
			title: state.title,
			category: state.category,
			categories: state.categories,
			blog: action.blog,
			blogs: state.blogs,
			about: state.about
		}
	}
	else if (action.type === actions.LOAD_SUCCESS) {
		return {
			category: state.category,
			categories: action.categories
		}
	}
	else if (action.type === actions.BLOG_LOAD_SUCCESS) {
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
			blogs: state.blogs,
			about: state.about,
			category: state.category,
			categories: state.categories
		}
	}
	else if (action.type === actions.SELECT_CATEGORY) {
		return {
			category: action.category,
			categories: state.categories,
			title: state.title,
			blog: state.blog,
			about: state.about,
			blogs: state.blogs
		}
	}
	else if (action.type === actions.SET_BLOG_ENTRY_FORM) {
		return {
			category: state.category,
			categories: state.categories,
			title: action.title,
			blog: action.blog,
			about: state.about,
			blogs: state.blogs
		}
	}
	else if (action.type === actions.POST_BLOG_SUCCESS) {
		return {
			category: state.category,
			categories: state.categories,
			title: state.title,
			blog: action.data.blogPost.content,
			success: "post success!",
			about: state.about
		}
	}
	else if(action.type === actions.GET_BLOG_TO_EDIT) {
		return {
			about: state.about,
			blogs: state.blogs,
			title: action.blog.blogPost.title,
			blog: action.blog.blogPost.content,
			category: state.category,
			categories: state.categories
		}
	}
	else if(action.type === actions.PUT_BLOG_SUCCESS) {
		return {
			category: state.category,
			categories: state.categories,
			title: state.title,
			blog: state.blog,
			success: "post success!",
			about: state.about,
			blogs: state.blogs
		}
	}
	else if(action.type === actions.GET_BLOGS_SUCCESS) {
		return {
			about: state.about,
			blogs: action.blogs,
			title: state.title,
			blog: state.blog,
			category: state.category,
			categories: state.categories
		}
	}
	else if(action.type === actions.GET_ABOUT_SUCCESS) {
		return {
			about: action.about,
			category: state.category,
			categories: state.categories,
			title: state.title,
			blog: state.blog,
			blogs: state.blogs
		}
	}
	else if(action.type === actions.CHANGE_ABOUT) {
		return {
			about: action.about,
			blogs: state.blogs,
			title: state.title,
			blog: state.blog,
			category: state.category,
			categories: state.categories
		}
	}
	else if(action.type === actions.UPDATE_ABOUT_SUCCESS) {
		return {
			about: state.about,
			blogs: state.blogs,
			title: state.title,
			blog: state.blog,
			category: state.category,
			categories: state.categories,
			success: "update success!"
		}
	}

	return state;
};

exports.blogReducer = blogReducer;