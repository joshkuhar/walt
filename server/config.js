exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/blog' :
                            'mongodb://localhost/blog-dev');
exports.PORT = process.env.PORT || 8080;