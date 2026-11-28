//setup express to handle routing and rendering
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//store inventory locations
var locations = [];
//store inventory items
var items =[];

//setup bodyparser to extra data from form posts
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

//route to index page
app.get('/', function(req, res) {
    res.render('page/index', { locations: locations, items: items});
});

//display Add Location page
app.get('/add-location', function(req, res) {
    res.render('page/add-location');
});

//add a new location
app.post('/add-location', function(req, res) {
    var location = req.body.location;
    if (location && location.trim() !== '') {
        locations.push(location.trim());
    }
    res.redirect('/');
});

//display Add Item page
app.get('/add-item', function(req, res) {
    res.render('page/add-item', { locations: locations });
});

//add a new item
app.post('/add-item', function(req,res) {
    var item = {
        name: req.body.name,
        quantity: req.body.quantity,
        location: req.body.location,
        details: req.body.details
    };
    if (item.name.trim() !== '' && item.quantity >= 1 && locations.includes(item.location)){
        items.push(item);
    }
    res.redirect('/');
});

//display View Item page
app.get('/view-item', function(req, res) {
    res.render('page/view-item');
});

//display Edit Item page
app.get('/edit-item', function(req, res) {
    res.render('page/edit-item');
});

//start the web app
app.listen(8080, function () {
	console.log('App listening on port 8080!');
});

