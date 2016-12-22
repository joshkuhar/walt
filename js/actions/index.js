require('isomorphic-fetch');

var SAVE_TEXT = 'SAVE_TEXT';
var saveText = function(text){
	return {
		type: SAVE_TEXT,
		text: text
		}
};
exports.SAVE_TEXT = SAVE_TEXT;
exports.saveText = saveText;

var postSuccess = function(data){
	console.log(data);
};

var postBlog = function(title, blog) {
    return function(dispatch) {
        var url = 'http://localhost:8080/r';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({text: {title : title, content: blog}}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(
            postSuccess(data)
            )
    }).catch(function(error) {
    	console.log(error);
        // return dispatch(
        //     fetchError(error)
        //     );
        });
    }
};
exports.postBlog = postBlog;

var updateBlog = function(title, blog) {
    return function(dispatch) {
        var url = 'http://localhost:8080/r';
        return fetch(url, {
        method: "PUT",
        body: JSON.stringify({text: {title : title, content: blog}}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(
            postSuccess(data)
            )
    }).catch(function(error) {
    	console.log(error);
        // return dispatch(
        //     fetchError(error)
        //     );
        });
    }
};
exports.updateBlog = updateBlog;
