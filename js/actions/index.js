require('isomorphic-fetch');

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

var SAVE_BLOG = 'SAVE_BLOG'
var saveBlog = function(title, blog){
    return {
        type: SAVE_BLOG,
        title: title,
        blog: blog
    }
}
exports.SAVE_BLOG = SAVE_BLOG;
exports.saveBlog = saveBlog;

var GET_SUCCESS = 'GET_SUCCESS';
var getSuccess = function(blog){
    return {
        type: GET_SUCCESS,
        title: blog.title,
        content: blog.content
    }
}
exports.GET_SUCCESS = GET_SUCCESS;
exports.getSuccess = getSuccess;

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

var postBlog = function(title, blog) {
    return function(dispatch) {
        var url = 'http://localhost:8080/r';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({title : title, content: blog}),
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
