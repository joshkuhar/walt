var actions = require('../actions/index');
var Categories = require('../mock-categories');
var DummyBlogs = require('../mock-data-loader');

var initialState = {
	about: "",
	title: "",
	post: "",
	content: "",
	sectionNumber: 3,
	category: "111",
	categoriesForLoading: Categories.categoriesForLoading,
	categories: Categories.categories,
	dummyBlogs: DummyBlogs,
	landingPost: {_id: "111", blogPost: {title: "foo", month: "Jan", date: "1", year: "2016", categoryId: "z"}},
	posts: [{_id: "111", blogPost: {title: "foo", month: "Jan", date: "1", year: "2016", categoryId: "z"}}]
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.UPDATE_BLOG) {
		return 	Object.assign({}, state, {
			blog: action.blog
		})
	}
	else if (action.type === actions.LOAD_SUCCESS) {
		return Object.assign({}, state, {	
			categories: action.categories
		})
	}
	else if (action.type === actions.BLOG_LOAD_SUCCESS) {
		return Object.assign({}, state, {
			blogs: action.blogs
		})
	}
	else if (action.type === actions.GET_CATEGORIES_SUCCESS){
		return Object.assign({}, state, {
			categories: action.categories
		})
	}
	else if (action.type === actions.SEARCH_CATEGORIES_SUCCESS) {
		return Object.assign({}, state, {
			posts: action.posts.posts
		})
	}
	else if (action.type === actions.UPDATE_TITLE) {
		return Object.assign({}, state, {
			title: action.title
		})
	}
	else if (action.type === actions.SELECT_CATEGORY) {
		return Object.assign({}, state, {
			category: action.category
		})
	}
	else if (action.type === actions.GET_CATEGORY_SECTION_SUCCESS){
		var categoryAdded = [];
		for (var post in state.posts){
			categoryAdded.push(state.posts[post])
		}
		for (var post in action.section.posts){
			categoryAdded.push(action.section.posts[post])
		}
		return Object.assign({}, state, {
			sectionNumber: action.sectionNumber + 1,
			posts: categoryAdded
		})
	}
	else if (action.type === actions.CATEGORY_SECTION_END) {
		return state
	}
	else if (action.type === actions.SET_BLOG_ENTRY_FORM) {
		return Object.assign({}, state, {
			title: action.title,
			blog: action.blog
		})
	}
	else if (action.type === actions.POST_BLOG_SUCCESS) {
		return Object.assign({}, state, {
			blog: action.data.blogPost.content
		})
	}
	else if(action.type === actions.GET_BLOG_TO_EDIT) {
		return Object.assign({}, state, {
			title: action.blog.blogPost.title,
			blog: action.blog.blogPost.content
		})
	}
	else if(action.type === actions.PUT_BLOG_SUCCESS) {
		return state
	}
	else if(action.type === actions.DELETE_BLOG_SUCCESS) {
		console.log("Delete Success");
		return state
	}
	else if(action.type === actions.GET_POSTS_SUCCESS) {
		return Object.assign({}, state, {
			landingPost: action.posts[0],
			posts: action.posts
		})
	}
	else if(action.type === actions.GET_SECTION_SUCCESS) {
		var categoryAdded = [];
		for (var post in state.posts){
			categoryAdded.push(state.posts[post])
		}
		for (var post in action.section){
			categoryAdded.push(action.section[post])
		}
		return Object.assign({}, state, {
			sectionNumber: action.sectionNumber + 1,
			posts: categoryAdded
		})
	}
	else if(action.type === actions.GET_ABOUT_SUCCESS) {
		return Object.assign({}, state, {
			about: action.about
		})
	}
	else if(action.type === actions.CHANGE_ABOUT) {
		return Object.assign({}, state, {
			about: action.about
		})
	}
	else if(action.type === actions.UPDATE_ABOUT_SUCCESS) {
		return state
	}

	return state;
};

exports.blogReducer = blogReducer;