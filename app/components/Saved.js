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
			results: "",
			delete: "no"
		}
	},
	componentDidMount: function(){
		helpers.getSavedArticles()
		.then(function(data){
			this.setState({
				results: {
					articles: data.articles.data
				}
			})
		}.bind(this))
	},
	deleteArticle: function(article) {
		helpers.deleteArticle(article)
		.then(function(response){
			helpers.getSavedArticles()
			.then(function(data){
				this.setState({
					results: {
						articles: data.articles.data
					}
				})
			}.bind(this))
		}.bind(this))
	},
	render: function() {
		return (
			<div>
				<Header head="Saved Articles" subhead="Saved Articles" />
				<Result results={this.state.results} deleteMode={true} deleter={this.deleteArticle} />
			</div>
		)
	}
})

module.exports = Query;