exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
							'mongodb://admin:password@ds119718.mlab.com:19718/blog-app' :
                            'mongodb://localhost/blog-dev');
exports.PORT = process.env.PORT || 8080;
exports.secret = 'nothingrhymeswithorange';