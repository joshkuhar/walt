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

var CHANGE_CONTENT = 'CHANGE_CONTENT';
var changeContent = function(content){
	return {
		type: CHANGE_CONTENT,
		content: content
		}
};
exports.CHANGE_CONTENT = CHANGE_CONTENT;
exports.changeContent = changeContent;

var CHANGE_TITLE = 'CHANGE_TITLE';
var changeTitle = function(title) {
    return {
        type: CHANGE_TITLE,
        title: title
    }
};
exports.CHANGE_TITLE = CHANGE_TITLE;
exports.changeTitle = changeTitle;

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

var SET_POST_FORM = 'SET_POST_FORM';
var setPostForm = function(){
    return {
        type: SET_POST_FORM,
        title: "",
        content: ""
    }
}
exports.SET_POST_FORM = 'SET_POST_FORM';
exports.setPostForm = setPostForm;



var GET_BLOG_TO_EDIT = 'GET_BLOG_TO_EDIT';
var getBlogToEdit = function(blog){
    return {
        type: GET_BLOG_TO_EDIT,
        blog: blog
    }
};
exports.GET_BLOG_TO_EDIT = GET_BLOG_TO_EDIT;
exports.getBlogToEdit = getBlogToEdit;




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

var GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
var getPostsSuccess = function(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts: posts
    }
}
exports.GET_POSTS_SUCCESS = GET_POSTS_SUCCESS;
exports.getPostsSuccess = getPostsSuccess;

var GET_POSTS_ERROR = 'GET_POSTS_ERROR';
var getPostsError = function(error) {
    return {
        type: GET_POSTS_ERROR
    }
}
exports.GET_POSTS_ERROR = GET_POSTS_ERROR;
exports.getPostsError = getPostsError;

var getPosts = function() {
    return function(dispatch) {
        var url = '/posts';
        return fetch(url)
    .then(function(res) {
        if(res.ok){
            return res.json()
        } else {
            var error = new Error(res.statusText);
            error.response = res;
            throw error;
        }
    })
    .then(function(data) {
        // if(res.ok){
            return dispatch(getPostsSuccess(data))
        // } else {
        //     var error = new Error(res.statusText);
        //     error.response = res;
        //     throw error;
        // }
    })
    .catch(function(error) {
        console.log(error);
        return dispatch(getPostsError(error))
        });
    }
};
exports.getPosts = getPosts; 

var GET_SECTION_SUCCESS = 'GET_SECTION_SUCCESS';
var getSectionSuccess = function(section, sectionNumber) {
    return {
        type: GET_SECTION_SUCCESS,
        section: section,
        sectionNumber: sectionNumber
    }
}
exports.GET_SECTION_SUCCESS = GET_SECTION_SUCCESS;
exports.getSectionSuccess = getSectionSuccess;

var getSection = function(sectionNumber) {
    return function(dispatch) {
        var url = '/posts/section/'+sectionNumber;
        return fetch(url).then(function(res){
            return res.json()
        }).then(function(data) {
            return dispatch(getSectionSuccess(data, sectionNumber))
        }).catch(function(error) {
            console.log(error);
        });
    }
};
exports.getSection = getSection;


var GET_DASHBOARD_POSTS_SUCCESS = 'GET_DASHBOARD_POSTS_SUCCESS'
var getDashboardPostsSuccess = function(posts) {
    return {
        type: GET_DASHBOARD_POSTS_SUCCESS,
        posts: posts
    }
}
exports.GET_DASHBOARD_POSTS_SUCCESS = GET_DASHBOARD_POSTS_SUCCESS;
exports.getDashboardPostsSuccess = getDashboardPostsSuccess;

var getDashboardPosts = function(token) {
    return function(dispatch) {
        var url = '/dashboard/posts';
        return fetch(url,{
            headers: {
                Authorization: 'JWT '+token
            }
        })
        .then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(getDashboardPostsSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getDashboardPosts = getDashboardPosts;

var GET_DASHBOARD_post_SUCCESS = 'GET_DASHBOARD_post_SUCCESS'
var getDashboardPostSuccess = function(post) {
    return {
        type: GET_DASHBOARD_post_SUCCESS,
        post: post
    }
}
exports.GET_DASHBOARD_post_SUCCESS = GET_DASHBOARD_post_SUCCESS;
exports.getDashboardPostSuccess = getDashboardPostSuccess;

var getDashboardPost = function(postId, token) {
    return function(dispatch) {
        var url = '/dashboard/post/'+postId;
        return fetch(url, {
            headers: {
                Authorization: 'JWT '+token
            }
        })
        .then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(getDashboardPostSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getDashboardPost = getDashboardPost;

var POST_CONTENT_SUCCESS = 'POST_CONTENT_SUCCESS'
var postContentSuccess = function(post) {
    return {
        type: POST_CONTENT_SUCCESS,
        post: post
    }
}
exports.POST_CONTENT_SUCCESS = POST_CONTENT_SUCCESS;
exports.postContentSuccess = postContentSuccess;

var postContent = function(title, categoryId, content, month, date, year, token) {
    return function(dispatch) {
        var url = '/dashboard/content/'+categoryId;
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title : title, 
            content: content, 
            month: month, 
            date: date, 
            year: year
        }),
        headers: {  
            "Content-Type": "application/json",
            "Authorization" : "JWT "+token
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(postContentSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.postContent = postContent;

var UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
var updatePostSuccess = function() {
    return {
        type: UPDATE_POST_SUCCESS
    }
}
exports.UPDATE_POST_SUCCESS = UPDATE_POST_SUCCESS;
exports.updatePostSuccess = updatePostSuccess;

var updatePost = function(title, post, postId, token) {
    return function(dispatch) {
        var url = '/dashboard/post/'+postId;
        return fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            title : title, 
            content: post
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "JWT "+token
        }
    }).then(function(res) {
        return res.status
    }).then(function(data) {
        console.log(data);
        return dispatch(updatePostSuccess())
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.updatePost = updatePost;

var DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
var deletePostSuccess = function() {
    return {
        type: DELETE_POST_SUCCESS
    }
}
exports.DELETE_POST_SUCCESS = DELETE_POST_SUCCESS;
exports.deletePostSuccess = deletePostSuccess;

var deletePost = function(postId, token) {
    return function(dispatch) {
        var url = '/dashboard/post/'+postId;
        return fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: 'JWT '+token
            }
        }).then(function(res) {
            return res
        }).then(function() {
            return dispatch(deletePostSuccess())
        }).catch(function(error) {
            console.log(error);
        });
    }
};
exports.deletePost = deletePost;

var loadCategories = function(categories){
    console.log("loadCategories was called");
    return function(dispatch) {
        var url = '/categories';
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
        var url = '/dashboard/posts';
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

var GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
var getCategoriesSuccess = function(categories){
    return {
        type: GET_CATEGORIES_SUCCESS,
        categories: categories
    }
}
exports.GET_CATEGORIES_SUCCESS = GET_CATEGORIES_SUCCESS;
exports.getCategoriesSuccess = getCategoriesSuccess;

var getCategories = function() {
    return function(dispatch) {
        var url = '/categories';
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

var SEARCH_CATEGORIES_SUCCESS = 'SEARCH_CATEGORIES_SUCCESS';
var searchCategoriesSuccess = function(posts) {
    return {
        type: SEARCH_CATEGORIES_SUCCESS,
        posts: posts
    }
};
exports.SEARCH_CATEGORIES_SUCCESS = SEARCH_CATEGORIES_SUCCESS;
exports.searchCategoriesSuccess = searchCategoriesSuccess;

var searchCategories = function(category) {
    return function(dispatch) {
        var url = '/categories/'+category;
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

var GET_CATEGORY_SECTION_SUCCESS = 'GET_CATEGORY_SECTION_SUCCESS';
var categorySectionSuccess = function(section, sectionNumber){
    return {
        type: GET_CATEGORY_SECTION_SUCCESS,
        section: section,
        sectionNumber: sectionNumber
    }
}
exports.GET_CATEGORY_SECTION_SUCCESS = GET_CATEGORY_SECTION_SUCCESS;
exports.categorySectionSuccess = categorySectionSuccess;

var CATEGORY_SECTION_END = 'CATEGORY_SECTION_END';
var categorySectionEnd = function() {
    return {
        type: CATEGORY_SECTION_END
    }
}
exports.CATEGORY_SECTION_END = CATEGORY_SECTION_END;
exports.categorySectionEnd = categorySectionEnd;

var getCategorySection = function(category, section) {
    return function(dispatch) {
        var url = '/categories/'+category+'/'+section;
        return fetch(url).then(function(res) {
            return res.json()
        }).then(function(data){
            if (data.posts.length < 1) {
                console.log("category empty");
                return dispatch(categorySectionEnd())
            }
            return dispatch(categorySectionSuccess(data,section))
        }).catch(function(error) {
            console.log(error);
        });
    }
};
exports.getCategorySection = getCategorySection;

var LOAD_ABOUT_SUCCESS = 'LOAD_ABOUT_SUCCESS';
var loadAboutSuccess = function(intro){
    return {
        type: LOAD_ABOUT_SUCCESS,
        intro: intro
    }
};

var loadAbout = function(intro, token){
    return function(dispatch) {
        var url = '/about';
        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                about: intro
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "JWT "+token
            }
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data) {
            return dispatch(loadAboutSuccess(data))
        })
        .catch(function(error) {
            console.log(error);
        })
    }
};
exports.loadAbout = loadAbout;

var GET_ABOUT_SUCCESS = 'GET_ABOUT_SUCCESS';
var getAboutSuccess = function(about) {
    return {
        type: GET_ABOUT_SUCCESS,
        about: about.about,
        aboutId: about._id
    }
};
exports.GET_ABOUT_SUCCESS = GET_ABOUT_SUCCESS;
exports.getAboutSuccess = getAboutSuccess;

var getAbout = function() {
    return function(dispatch) {
        var url = '/about';
        return fetch(url)
        .then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(getAboutSuccess(data))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getAbout = getAbout;

var updateAbout = function(aboutId, about, token){
    return function(dispatch) {
        var url = '/about/'+aboutId;
        return fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            about : about, 
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "JWT "+token
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

var CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
var createUserSuccess = function(username){
    return {
        type: CREATE_USER_SUCCESS,
        username: username
    }
}
exports.CREATE_USER_SUCCESS = CREATE_USER_SUCCESS;
exports.createUserSuccess = createUserSuccess;

var createUser = function(username, password){
    return function(dispatch) {
        var url = '/users';
        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function(res) {
        return res.json()
    }).then(function(data) {
        var username=data.username;
        return dispatch(createUserSuccess(username))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.createUser = createUser;

var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var loginSuccess = function(username, token, success){
    return {
        type: LOGIN_SUCCESS,
        username: username,
        token: token,
        success: success
    }
}
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
exports.loginSuccess = loginSuccess;

var getUser = function(username, password){    
    return function(dispatch) {
        console.log(username, password);
        var url = '/login';
        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function(res) {
        return res.json()
    }).then(function(data) {
        var username=data.username;
        var token=data.token;
        var success=data.success;
        console.log(data);
        return dispatch(loginSuccess(username, token, success))
    }).catch(function(error) {
        console.log(error);
        });
    }
};
exports.getUser = getUser;

var RESET_SUCCESS = 'RESET_SUCCESS';
var resetSuccess = function(){
    return {
        type: RESET_SUCCESS
    }
}
exports.RESET_SUCCESS = RESET_SUCCESS;
exports.resetSuccess = resetSuccess;

var LOG_OUT = 'LOG_OUT';
var logOut = function() {
    return {
        type: LOG_OUT
    }
}
exports.LOG_OUT = LOG_OUT;
exports.logOut = logOut;