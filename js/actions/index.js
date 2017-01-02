require('isomorphic-fetch');

var LOAD_SUCCESS = 'LOAD_SUCCESS';
var loadSuccess = function(categories){
    return {
        type: LOAD_SUCCESS,
        categories: categories
    }
}
exports.LOAD_SUCCESS = LOAD_SUCCESS;
exports.loadSuccess = loadSuccess;

var BLOG_LOAD_SUCCESS = 'BLOG_LOAD_SUCCESS';
var blogLoadSuccess = function(blogs){
    return {
        type: BLOG_LOAD_SUCCESS,
        blogs: blogs
    }
}
exports.BLOG_LOAD_SUCCESS = BLOG_LOAD_SUCCESS;
exports.blogLoadSuccess = blogLoadSuccess;

var GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
var getCategoriesSuccess = function(categories){
    return {
        type: GET_CATEGORIES_SUCCESS,
        categories: categories
    }
}
exports.GET_CATEGORIES_SUCCESS = GET_CATEGORIES_SUCCESS;
exports.getCategoriesSuccess = getCategoriesSuccess;

var UPDATE_BLOG = 'UPDATE_BLOG';
var updateBlog = function(blog){
	return {
		type: UPDATE_BLOG,
		blog: blog
		}
};
exports.UPDATE_BLOG = UPDATE_BLOG;
exports.updateBlog = updateBlog;

var UPDATE_TITLE = 'UPDATE_TITLE';
var updateTitle = function(title) {
    return {
        type: UPDATE_TITLE,
        title: title
    }
};
exports.UPDATE_TITLE = UPDATE_TITLE;
exports.updateTitle = updateTitle;

var SELECT_CATEGORY = 'SELECT_CATEGORY';
var selectCategory = function(category) {
    return {
        type: SELECT_CATEGORY,
        category: category
        }
};
exports.SELECT_CATEGORY = SELECT_CATEGORY;
exports.selectCategory = selectCategory;

var ADD_CATEGORY = 'ADD_CATEGORY';
var addCategory = function(category){
    return {
        type: ADD_CATEGORY,
        category: category
    }
};
exports.ADD_CATEGORY = ADD_CATEGORY;
exports.addCategory = addCategory;

var POST_BLOG_SUCCESS = 'POST_BLOG_SUCCESS'
var postBlogSuccess = function(data) {
    return {
        type: POST_BLOG_SUCCESS,
        data: data
    }
}
exports.POST_BLOG_SUCCESS = POST_BLOG_SUCCESS;
exports.postBlogSuccess = postBlogSuccess;

var GET_BLOG_TO_EDIT = 'GET_BLOG_TO_EDIT';
var getBlogToEdit = function(){
    return {
        type: GET_BLOG_TO_EDIT
    }
};
exports.GET_BLOG_TO_EDIT = GET_BLOG_TO_EDIT;
exports.getBlogToEdit = getBlogToEdit;

var GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS'
var getBlogsSuccess = function(blogs) {
    return {
        type: GET_BLOGS_SUCCESS,
        blogs: blogs
    }
}
exports.GET_BLOGS_SUCCESS = GET_BLOGS_SUCCESS;
exports.getBlogsSuccess = getBlogsSuccess;

var loadCategories = function(categories){
    return function(dispatch) {
        var url = 'http://localhost:8080/dashboard/category';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            categories : categories, 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(loadSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.loadCategories = loadCategories;

var loadBlogs = function(blogs){
    return function(dispatch) {
        var url = 'http://localhost:8080/dashboard/load';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            blogs : blogs, 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(blogLoadSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.loadBlogs = loadBlogs;

var getCategories = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/dashboard/category';
        return fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(getCategoriesSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getCategories = getCategories;

var getBlogs = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/blogs';
        return fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(getBlogsSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getBlogs = getBlogs;

var postBlog = function(title, category, blog, month, date, year) {
    return function(dispatch) {
        var url = 'http://localhost:8080/dashboard/create/' + category;
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title : title, 
            content: blog, 
            month: month, 
            date: date, 
            year: year
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(postBlogSuccess(data))
    }).catch(function(error) {
    	console.log(error);
        });
    }
};
exports.postBlog = postBlog;


