var React = require('react');

// create the search form component
var Result = React.createClass({
	getInitialState: function() {
		return {
			articles: ""
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.props.results != prevProps.results)
		this.setState({articles: this.props.results.articles})
	},
  render: function() {
  	if (this.state.articles != "") {
  		var articles = this.state.articles.map(function(article, index){
  			if (article.headline.main) {
  				var headline = article.headline.main;
  			}
  			else {
  				var headline = article.headline;
  			}
  			var url = article.web_url;
  			var pubDate = article.pub_date;
  			return (
				  <li className="list-group-item" key={index}>
						<h3>
							{article.headline.main && <span><em>{headline}</em></span>}
							<span className="btn-group pull-right" >
								<button className="btn btn-default" data-url={url}>View Article</button>
								<button className="btn btn-primary" onClick={this.saveArticle.bind(this, article)}>Save</button>
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
	saveArticle: function(article){
		console.log(article);
	}
});


module.exports = Result;