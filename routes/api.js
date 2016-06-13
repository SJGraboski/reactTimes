// api routes
// require dependencies
var path = require('path');
var request = require('request');

// load our mongoose models
var Saved = require('../models/Saved.js');



// export api routes for the express app
module.exports = function(app) {
	app.post('/api/save', function(req, res){
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
	});

	// call to grap articles and send them as json
	app.get('/api/save', function(req, res) {
		// reach into the Saved db for at least 50 results
		var query = Saved.find().sort({'created_at': -1});

		// execute the query
		query.exec(function(err, docs) {
			// log any errors
			if (err){
				console.log(error)
			} 
			// otherwise, send the articles as a json
			else {
				res.json(docs);
			}
		})
	});

	// call to delete an article when user clicks delete button
	app.delete('/api/delete/:id', function(req, res) {
		// grab the object id from the param
		var id = req.params.id;

		// use the object id to delete the object
		Saved.remove({ _id: id}, function(err) {
			// log any errors
			if (err){
				console.log(err);
			} 
			// otherwise send a success message
			else {
				res.status(201).end();
			}
		})
	})
}