var PostRouter = require('express').Router();
var Post = require('./blogPostModel');
var Category = require('../category/categoryModel');

PostRouter.post('/posts/:categoryId', function(req, res) {
    Post.create({
                title: req.body.title,
                content: req.body.content,
                month: req.body.month,
                date: req.body.date,
                year: req.body.year,
                categoryId: req.params.categoryId
        },
        function(err, post) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            } else {
                Category.findOneAndUpdate({
                        _id: req.params.categoryId
                    }, {
                        $addToSet: {
                            posts: post._id
                        }
                    },  
                    function(err2, category) {
                        if (err2) {
                            console.log(err);
                            return res.status(500).json({
                                message: 'Internal Server Error'
                            });
                        }
                        res.status(200).json(post);
                    }
                );
            }
        });  
});

// loads test data into mongo
PostRouter.post('/dashboard/posts', function(req, res) {
    for (var index in req.body.posts) {
        Post.create({
                    title: req.body.posts[index].title,
                    content: req.body.posts[index].content,
                    month: req.body.posts[index].month,
                    date: req.body.posts[index].date,
                    year: req.body.posts[index].year,
                    categoryId: req.body.posts[index].categoryId
            },
            function(err, post) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                } else {
                    Category.findOneAndUpdate({
                            _id: post.categoryId
                        }, {
                            $addToSet: {
                                posts: post._id
                            }
                        },
                        function(err2, category) {
                            if (err2) {
                                console.log(err);
                                return res.status(500).json({
                                    message: 'Internal Server Error'
                                });
                            }
                        }
                    );
                }
            });
    }
    res.status(200).json({
        response: "check database to confirm all loaded"
    });
});

PostRouter.get('/posts', function(req, res) {
    Post.find({}).limit(3).sort({ _id: -1 }).exec( function(err, posts) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(posts);    
    });
});

PostRouter.get('/dashboard/posts', function(req, res) {
    Post.find({}, 'title date year month')
    .limit(20)
    .sort({ _id: -1 })
    .exec( function(err, posts) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(posts);    
    });
});
// For production, make sure you sort by created_at!!!!
//Post.find({}).sort({date: -1}).exec(function
// { $orderby: { "created_at": -1 } }, 

PostRouter.get('/dashboard/post/:postId', function(req, res) {
    Post.findById(req.params.postId)
    .exec( function(err, post) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(post);    
    });
});


PostRouter.put('/dashboard/post/:postId', function(req, res) {
    Post.findByIdAndUpdate(req.params.postId, {
            $set: {
                "title": req.body.title,
                "content": req.body.content
            }
        },
        function(err) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            res.status(201).end();
        });
});

PostRouter.delete('/dashboard/post/:postId', function(req, res){
    Post.findByIdAndRemove(
        req.params.postId, function(err){
            if(err){
                console.log(err);
            }
            res.status(202).end();
        });
});
// count array 
PostRouter.get('/posts/count', function(req, res) {
    Post.count(function(err, posts) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(posts);
    });
});

// pagination
PostRouter.get('/posts/section/:number', function(req, res) {
    Post.find({})
    .skip(parseInt(req.params.number))
    .limit(1)
    .sort({_id: -1})
    .exec( function(err, posts){
        if(err){               
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log(posts);
        res.status(200).json(posts);
    });
});


module.exports = PostRouter;
