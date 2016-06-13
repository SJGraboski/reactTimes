/* React Times
 * Rutgers Coding Bootcampt assignment
 * =============================================================================== */

// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var methodOverride = require('method-override')

// start the express app
var app = express();

// use logger in dev mode
app.use(logger('dev'));

// set up bodyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// make static folder
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));


// configure our db with mongoose
mongoose.connect('mongodb://heroku_wxsfb2n8:bf5483euvo6pn2lq5nvcqovpr1@ds013574.mlab.com:13574/heroku_wxsfb2n8');
var db = mongoose.connection;

// mongoose connection: if err, tell us what's up
db.on('error', function(err){
	console.log('Mongoose Error: ', err);
});
// once the connections open, tell us
db.once('open', function(){
	console.log('Mongoose connection successful!');
})

// our api route goes here
// no need for an html route: react and react-router will handle that.
require('./routes/api.js')(app);


// define port
var PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, function(){
	console.log('app listening on' + PORT);
})

