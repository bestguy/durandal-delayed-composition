var connect = require('connect');
var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.compress());
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(connect.responseTime());
app.use(app.router);

// Static
app.get('/', function (req, res, next) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('App running on port 3000');
});