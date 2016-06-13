/*Axios is a convenient NPM package for performing HTTP requests*/
var axios = require('axios');

// Create a helpers object which we will export
var helpers = {
	// talk to the nytimes api to grab articles based on search form inpit
	getArticles: function(term, start, end){
		return axios.get(
		"https://api.nytimes.com/svc/search/v2/articlesearch.json" +
		"?api-key=2ba014e98c7a46ed818343e31f61e45f" +
		"&q=" + term +
		"&begin_date=" + start +
		"&end_date=" + end
		).then(function(response){
			// return the articles
			return {
				articles: response.data.response.docs,
			}
		})
	},
	// grab the saved articles in our mlab db using an GET call to our server
	getSavedArticles: function(){
		return axios.get("/api/save")
		.then(function(response){
			// return the articles
			return {
				articles: response
			}
		})
	},
	// save an article in our mlab db using an GET call to our server
	saveArticle: function(article){
		return axios.post("/api/save", { headline: article.headline.main, pub_date: article.pub_date, web_url: article.web_url})
		.then(function(response) {
			// return the response
			return response;
		})
	},
	// delete an article from our mLab using the article id.
	deleteArticle: function(article){
		return axios.delete("/api/delete/" + article._id)
		.then(function(response) {
			// return the response
			return response;
		})
	}
}

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;