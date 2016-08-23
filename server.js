var express = require('express');
var app = express();
var PORT = 3000;

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
app.use (middleware.logger);
// app.use (middleware.requireAuthentication); 

// app.get('/', function (req, res) {
// 	res.send('Ollo Express');
// });

// about page

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);
app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT);
});