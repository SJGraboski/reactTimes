// Query page
// ==========

// dependencies
var React = require('react');
var Router = require('react-router');

// load components
var Header = require('./Header.js')
var Search = require('./Search/Search.js')
var Result = require('./Search/Result.js')

// helpers functions
var helpers = require('../utils/helpers.js')

// create Query component
var Query = React.createClass({
	// state initialized for form queries and results
	getInitialState: function() {
		return {
			term: "",
			start: "",
			end: "",
			results: ""
		}
	},
	// componentDidUpdate: grab articles whenever update comes in
	componentDidUpdate: function(prevProps, prevState){
		// check to make sure at least one of the search inputs are different
		if ((this.state.term != prevState.term && this.state.term != "" )
			|| (this.state.start != prevState.start && this.state.start != "" ) 
				|| (this.state.end != prevState.end && this.state.end != "" )) {
			// helpers getArticles
			helpers.getArticles(this.state.term, this.state.start, this.state.end)
			.then(function(data){
				// if the data differs from the state's results, make the data the results
				if (data != this.state.results) {
					this.setState({
						results: data
					})
				}
			}.bind(this)); // make "this" function as exprected
		}
	},
	// set Query to inputs
	setQuery: function(newTerm, newStart, newEnd){
		// set the state to the for inputs
		this.setState({
			term: newTerm,
			start: newStart,
			end: newEnd
		});
	},
	// render function
	render: function() {
		return (
			<div>
				<Header head="Test" subhead="Second Test" />
				<Search onSearchSubmit={this.setQuery} />
				<Result results={this.state.results} deleteMode={false} deleter="" />
			</div>
		)
	}
})

module.exports = Query;