require('isomorphic-fetch');

var GET_SUCCESS = 'GET_SUCCESS';
var getSuccess = function(blog){
    return {
        type: GET_SUCCESS,
        title: blog.title,
        category: blog.category,
        content: blog.content
    }
}
exports.GET_SUCCESS = GET_SUCCESS;
exports.getSuccess = getSuccess;

var LOAD_CATEGORIES = 'LOAD_CATEGORIES';
var loadCategories = function(categories){
    return {
        type: LOAD_CATEGORIES,
        categories: categories
    }
}
exports.LOAD_CATEGORIES = LOAD_CATEGORIES;
exports.loadCategories = loadCategories;

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

var GET_BLOG_TO_EDIT = 'GET_BLOG_TO_EDIT';
var getBlogToEdit = function(){
    console.log("woot");
    return {
        type: GET_BLOG_TO_EDIT
    }
};
exports.GET_BLOG_TO_EDIT = GET_BLOG_TO_EDIT;
exports.getBlogToEdit = getBlogToEdit;


var getBlog = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/r';
        return fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(
            getSuccess(data)
            )
    }).catch(function(error) {
        console.log(error);
        // return dispatch(
        //     fetchError(error)
        //     );
        });
    }
};
exports.getBlog = getBlog;

var postBlog = function(title, category, blog) {
    console.log(title, category, blog);
    return function(dispatch) {
        var url = 'http://localhost:8080/r';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({title : title, category: category, content: blog}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data);
        // return dispatch(
        //     postSuccess(data)
        //     )
    }).catch(function(error) {
    	console.log(error);
        // return dispatch(
        //     fetchError(error)
        //     );
        });
    }
};
exports.postBlog = postBlog;

// var saveBlog = function(title, blog) {
//     return function(dispatch) {
//         var url = 'http://localhost:8080/r';
//         return fetch(url, {
//         method: "PUT",
//         body: JSON.stringify({title : title, content: blog}),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(function(res) {
//         return res.json()
//     }).then(function(data) {
//         return dispatch(
//             postSuccess(data)
//             )
//     }).catch(function(error) {
//     	console.log(error);
//         // return dispatch(
//         //     fetchError(error)
//         //     );
//         });
//     }
// };
// exports.updateBlog = updateBlog;
