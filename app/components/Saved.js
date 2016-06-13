// saved article page

// dependencies
var React = require('react');
var Router = require('react-router');

// header, search and result components
var Header = require('./Header.js')
var Search = require('./Search/Search.js')
var Result = require('./Search/Result.js')

// helpers
var helpers = require('../utils/helpers.js')

// Query component
var Query = React.createClass({
	// set initial state
	getInitialState: function() {
		return {
			results: "", // the article results
		}
	},
	// grab any saved articles when the component
	componentDidMount: function(){
		// helper function, grabs all articles in mlab db
		helpers.getSavedArticles()
		.then(function(data){
			// set the results state
			this.setState({
				results: {
					articles: data.articles.data // add articles to results
				}
			})
		}.bind(this)) // allows this to function as expected
	},
	// delete article from mlab on button press.
	// uses the deleter prop in Result component
	// and send it back to the component.
	deleteArticle: function(article) {
		// delete article function in helpers
		helpers.deleteArticle(article)
		.then(function(response){
			// grab saved Articles using helper function
			helpers.getSavedArticles()
			.then(function(data){
				// set the results state
				this.setState({
					results: {
						articles: data.articles.data
					}
				})
			}.bind(this)) // allows this to function as expected
		}.bind(this)) // allows this to function as expected
	},
	// render the header and result
	render: function() {
		return (
			<div>
				<Header head="Saved Articles" subhead="Saved Articles" />
				<Result results={this.state.results} deleteMode={true} deleter={this.deleteArticle} />
			</div>
		)
	}
})

// export component
module.exports = Query;