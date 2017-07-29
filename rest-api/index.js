var express = require('express');
var database = require('./msdFamilyDirectoryChristchurch');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/data', function (req, res) {
	//res.send('Hello World! data');
	res.setHeader('Content-Type', 'application/json');
	console.log(database);
	var data = database;
	res.send(data);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});