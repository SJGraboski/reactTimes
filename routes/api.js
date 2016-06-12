// api routes
// require dependencies
var path = require('path');
var request = require('request');

// load our mongoose models
var Saved = require('../models/Saved.js');



// export api routes for the express app
module.exports = function(app) {
	app.post('api/save', function(req, res){
		var article = new Saved(req.body);
		// save the article 
		article.save(function(err, doc) {
			// log any errors
			if (err){
				console.log(err);
			} else {
				console.log(doc);
				res.status(201).end();
			}
		})
	})
}