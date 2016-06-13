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
		// reach into the Articles db for at least 50 results
		var query = Saved.find().sort({'created_at': -1});
		query.exec(function(err, docs) {
			if (err){
				console.log(error)
			} else {
				res.json(docs);
			}
		})
	});

	// call to grap articles and send them as json
	app.delete('/api/delete/:id', function(req, res) {
		var id = req.params.id;
		Saved.remove({ _id: id}, function(err) {
			// log any errors
			if (err){
				console.log(err);
			} else {
				res.status(201).end();
			}
		})
	})
}