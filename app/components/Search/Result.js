var React = require('react');

var helpers = require('../../utils/helpers.js')


// create the search form component
var Result = React.createClass({
	getInitialState: function() {
		return {
			articles: this.props.results.articles ? this.props.results.articles : ""
			}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.props != prevProps || this.state.deleted != prevState.deleted) {
			this.setState({
				articles: this.props.results.articles,
			})
		}
	},
  render: function() {

  	if (this.state.articles && this.state.articles != "") {
  		console.log(this.state.articles);
  		var articles = this.state.articles.map(function(article, index){
  			if (article.headline.main) {
  				var headline = article.headline.main;
  			}
  			else {
  				var headline = article.headline;
  			}
  			console.log(headline);
  			var url = article.web_url;
  			var pubDate = article.pub_date;

  			var saveOrDeleteBtn;
  			if (this.props.deleteMode){
  				console.log(this.props.deleteMode);
  				saveOrDeleteBtn = <button className="btn btn-primary" onClick={this._handleDelete.bind(this, article)}>Delete</button>
  			}
  			else {
  				saveOrDeleteBtn = <button className="btn btn-primary" onClick={this._saveArticle.bind(this, article)}>Save</button>
  			}
  			return (
				  <li className="list-group-item" key={index}>
						<h3>
							{headline && <span><em>{headline}</em></span>}
							<span className="btn-group pull-right" >
								<button className="btn btn-default" onClick={this._openArticle.bind(this, article)}>View Article</button>
								{saveOrDeleteBtn}
							</span> 
						</h3>
						{article.pub_date && <p>Date Published: {pubDate}</p>}
				  </li>
  			)
  		}.bind(this))
  	} 
  	return (
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
						</div>
						<div className="panel-body">
							<ul className="list-group">
  							{articles}
  						</ul>
  					</div>
  				</div>
  			</div>
  		</div>
  	)
  },
	_openArticle: function(article){
		window.open(article.web_url, "_blank");
	},
	_saveArticle: function(article){
		helpers.saveArticle(article);
	},
  _handleDelete: function(article) {
  	this.props.deleter(article)
    return false;
  }
});


module.exports = Result;