// refer to Search/Search.js
var React = require('react');
var Router = require('react-router');
var Header = require('./Header.js')
var Search = require('./Search/Search.js')
var Result = require('./Search/Result.js')


// Include the Repos, UserProfile, and Notes Components
// var Search = require('./Search/Search');
// var UserProfile = require('./Search/Result');

var Query = React.createClass({
	// handleSearchSubmit: function(search) {
	// 	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	// 	url += '?' + $.param({
 //  		'api-key': "2ba014e98c7a46ed818343e31f61e45f"
	// 	});
	// 	$.ajax({
	// 		url: url,
	// 		type: 'GET',
	// 		data: search,
	// 		success: function(data){
	// 			this.setState({data:data})
	// 		}.bind(this),
	// 		error: function(xhr, status, err) {
	// 			console.error(this.props.url, status, err.toString())
	// 		}.bind(this)
	// 	})
	// },
	// getInitialState: function() {
	// 	return {data: []};
	// },
	render: function() {
		return (
			<div>
				<Header head="ok" subhead="cool" />
				<Result />
			</div>
		)
	}
})

module.exports = Query;