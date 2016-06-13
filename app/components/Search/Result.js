// result component for query and saved pages

// dependency
var React = require('react');

// helper functions
var helpers = require('../../utils/helpers.js')


// create the search form component
var Result = React.createClass({
  // get initial state
	getInitialState: function() {
		return {
      // if there's a results prop with articles, make that the state. Otherwise, it's blank
			articles: this.props.results.articles ? this.props.results.articles : ""
			}
	},
  // if prop updates, make the articles in the results prop the result
	componentDidUpdate: function(prevProps, prevState) {
		if (this.props != prevProps || this.state.deleted != prevState.deleted) {
      this.setState({
				articles: this.props.results.articles,
			})
		}
	},
  // render function
  render: function() {
    // If there are articles in the state, and the state isn't "", do this
  	if (this.state.articles && this.state.articles != "") {
  		
      // map function for each article in the state
      var articles = this.state.articles.map(function(article, index){
  		  // if there's a main in the headline, use that as the headline
      	if (article.headline.main) {
  				var headline = article.headline.main;
  			}
        // otherwise, save the headline
  			else {
  				var headline = article.headline;
  			}
        // url is article.web_url (url of article)
  			var url = article.web_url;
        // pubDat is article.pub_date (date of publication)
  			var pubDate = article.pub_date;

        // blank var for button element
  			var saveOrDeleteBtn;
        // if the deleteMode prop is true
  			if (this.props.deleteMode){
  				// make a delete button
          saveOrDeleteBtn = <button className="btn btn-primary" onClick={this._handleDelete.bind(this, article)}>Delete</button>
  			}
        // otherwise
  			else {
          // make a save button
  				saveOrDeleteBtn = <button className="btn btn-primary" onClick={this._saveArticle.bind(this, article)}>Save</button>
  			}
        // return the jsx
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
  		}.bind(this)) // make "this" work as exprected.
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
  // open the article when view article button is pressed
	_openArticle: function(article){
		window.open(article.web_url, "_blank");
	},
  // save article to mlab
	_saveArticle: function(article){
		helpers.saveArticle(article);
	},
  // handle delete, give it to the deleter prop so parent can make api call
  // and send any articles back to result
  _handleDelete: function(article) {
  	this.props.deleter(article)
    return false;
  }
});


module.exports = Result;