//setup express to handle routing and rendering
var express = require('express');
var app = express();
var locations = [];
app.set('view engine', 'ejs');

//setup bodyparser to extra data from form posts
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

// route to index page
app.get('/', function(req, res) {
    res.render('page/index', { locations: locations});
});

// display Add Location page
app.get('/add-location', function(req, res) {
    res.render('page/add-location');
});

// add a new location
app.post('/add-location', function(req, res) {
    var location = req.body.location;
    if (location && location.trim() !== '') {
        locations.push(location.trim());
    }
    res.redirect('/');
});

// display Add Item page
app.get('/add-item', function(req, res) {
    res.render('page/add-item');
});

// display View Item page
app.get('/view-item', function(req, res) {
    res.render('page/view-item');
});

// display Edit Item page
app.get('/edit-item', function(req, res) {
    res.render('page/edit-item');
});

//start the web app
app.listen(8080, function () {
	console.log('App listening on port 8080!');
});

