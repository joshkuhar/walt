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

var INDEX_DOWN = 'INDEX_DOWN';
var indexDown = function(index) {
    return {
        type: INDEX_DOWN,
        index: index
    }
}
exports.INDEX_DOWN = 'INDEX_DOWN';
exports.indexDown = indexDown;

var INDEX_UP = 'INDEX_UP';
var indexUp = function(index) {
    return {
        type: INDEX_UP,
        index: index
    }
}
exports.INDEX_UP = INDEX_UP;
exports.indexUp = indexUp;

var ADD_CATEGORY = 'ADD_CATEGORY';
var addCategory = function(category){
    return {
        type: ADD_CATEGORY,
        category: category
    }
};
exports.ADD_CATEGORY = ADD_CATEGORY;
exports.addCategory = addCategory;

var SET_BLOG_ENTRY_FORM = 'SET_BLOG_ENTRY_FORM';
var setBlogEntryForm = function(){
    return {
        type: SET_BLOG_ENTRY_FORM,
        title: "",
        blog: ""
    }
}
exports.SET_BLOG_ENTRY_FORM = 'SET_BLOG_ENTRY_FORM';
exports.setBlogEntryForm = setBlogEntryForm;

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
var getBlogToEdit = function(blog){
    return {
        type: GET_BLOG_TO_EDIT,
        blog: blog
    }
};
exports.GET_BLOG_TO_EDIT = GET_BLOG_TO_EDIT;
exports.getBlogToEdit = getBlogToEdit;

var PUT_BLOG_SUCCESS = 'PUT_BLOG_SUCCESS'
var putBlogSuccess = function() {
    return {
        type: PUT_BLOG_SUCCESS
    }
}
exports.PUT_BLOG_SUCCESS = PUT_BLOG_SUCCESS;
exports.putBlogSuccess = putBlogSuccess;

var DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS';
var deleteBlogSuccess = function() {
    return {
        type: DELETE_BLOG_SUCCESS
    }
}
exports.DELETE_BLOG_SUCCESS = DELETE_BLOG_SUCCESS;
exports.deleteBlogSuccess = deleteBlogSuccess;

var GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS'
var getBlogsSuccess = function(blogs) {
    return {
        type: GET_BLOGS_SUCCESS,
        blogs: blogs
    }
}
exports.GET_BLOGS_SUCCESS = GET_BLOGS_SUCCESS;
exports.getBlogsSuccess = getBlogsSuccess;

var GET_ABOUT_SUCCESS = 'GET_ABOUT_SUCCESS';
var getAboutSuccess = function(about) {
    return {
        type: GET_ABOUT_SUCCESS,
        about: about.about
    }
};
exports.GET_ABOUT_SUCCESS = GET_ABOUT_SUCCESS;
exports.getAboutSuccess = getAboutSuccess;

var SEARCH_CATEGORIES_SUCCESS = 'SEARCH_CATEGORIES_SUCCESS';
var searchCategoriesSuccess = function(category) {
    return {
        type: SEARCH_CATEGORIES_SUCCESS,
        category: category
    }
};
exports.SEARCH_CATEGORIES_SUCCESS = SEARCH_CATEGORIES_SUCCESS;
exports.searchCategoriesSuccess = searchCategoriesSuccess;

var UPDATE_ABOUT_SUCCESS = 'UPDATE_ABOUT_SUCCESS';
var updateAboutSuccess = function(){
    return {
        type: UPDATE_ABOUT_SUCCESS
    }
}
exports.UPDATE_ABOUT_SUCCESS = UPDATE_ABOUT_SUCCESS;
exports.updateAboutSuccess = updateAboutSuccess;

var CHANGE_ABOUT = 'CHANGE_ABOUT';
var changeAbout = function(about) {
    return {
        type: CHANGE_ABOUT,
        about: about
    }
};
exports.CHANGE_ABOUT = CHANGE_ABOUT;
exports.changeAbout = changeAbout;

var getBlogs = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/posts';
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
        var url = 'http://localhost:8080/posts/'+category;
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

var putBlog = function(title, post, postId) {
    return function(dispatch) {
        var url = 'http://localhost:8080/posts/'+postId;
        return fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            title : title, 
            content: post
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.status
    }).then(function(data) {
        console.log(data);
        return dispatch(putBlogSuccess())
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.putBlog = putBlog;

var deleteBlog = function(postId) {
    return function(dispatch) {
        var url = 'http://localhost:8080/posts/'+postId;
        return fetch(url, {
            method: "DELETE"
        }).then(function(res) {
            return res
        }).then(function() {
            return dispatch(deleteBlogSuccess())
        }).catch(function(error) {
            console.log(error);
        });
    }
};
exports.deleteBlog = deleteBlog;

var loadCategories = function(categories){
    console.log("loadCategories was called");
    return function(dispatch) {
        var url = 'http://localhost:8080/categories';
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

var loadBlogs = function(posts){
    return function(dispatch) {
        var url = 'http://localhost:8080/dashboard/posts';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            posts : posts, 
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
        var url = 'http://localhost:8080/categories';
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

var searchCategories = function(category) {
    return function(dispatch) {
        var url = 'http://localhost:8080/categories/'+category;
        return fetch(url).then(function(res) {
            return res.json()
        }).then(function(data) {
            return dispatch(searchCategoriesSuccess(data))
        }).catch(function(err) {
            console.log(err);
        });
    }
};
exports.searchCategories = searchCategories;

var getAbout = function(aboutId) {
    return function(dispatch) {
        var url = 'http://localhost:8080/about/'+aboutId;
        return fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(getAboutSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getAbout = getAbout;

var updateAbout = function(aboutId, about){
    return function(dispatch) {
        var url = 'http://localhost:8080/about/'+aboutId;
        return fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            about : about, 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.status
    }).then(function() {
        return dispatch(updateAboutSuccess())
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.updateAbout = updateAbout;