// Use module exports to expose middleware

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private routh hit!');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString()
		console.log('Request: ' + req.method + ' ' + req.originalUrl + 'Made: ' + date);
		next();
	}
};

module.exports = middleware;