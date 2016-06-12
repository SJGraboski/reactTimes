// refer to Search/Search.js
var React = require('react');
var Router = require('react-router');
var Header = require('./Header.js')
var Search = require('./Search/Search.js')
var Result = require('./Search/Result.js')

var helpers = require('../utils/helpers.js')

// Include the Repos, UserProfile, and Notes Components
// var Search = require('./Search/Search');
// var UserProfile = require('./Search/Result');

var Query = React.createClass({
	getInitialState: function() {
		return {
			term: "",
			start: "",
			end: "",
			results: {}
		}
	},
	componentDidUpdate: function(prevProps, prevState){
		// check to make sure at least one of the search inputs are different
		if ((this.state.term != prevState.term && this.state.term != "" )
			|| (this.state.start != prevState.start && this.state.start != "" ) 
				|| (this.state.end != prevState.end && this.state.end != "" )) {
			console.log("fired");
			helpers.getArticles(this.state.term, this.state.start, this.state.end)
			.then(function(data){
					if(data != this.state.results) {
						this.setState({
							results: data
						})
					}
			}.bind(this));
		}
	},
	setQuery: function(newTerm, newStart, newEnd){
		this.setState({
			term: newTerm,
			start: newStart,
			end: newEnd
		})
	},
	render: function() {
		return (
			<div>
				<Header head="Test" subhead="Second Test" />
				<Search onSearchSubmit={this.setQuery} />
				<Result results={this.state.results} />
			</div>
		)
	}
})

module.exports = Query;