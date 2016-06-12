/*Axios is a convenient NPM package for performing HTTP requests*/
var axios = require('axios');

// // Here we have two functions for querying for user and repo information to the GitHub website.
// function getArticles(term, start, end){
// 	return axios.get(
// 		"https://api.nytimes.com/svc/search/v2/articlesearch.json" +
// 		"?api-key=2ba014e98c7a46ed818343e31f61e45f" +
// 		"&q=" + term +
// 		"&begin_date=" + start +
// 		"&end_date=" + end
// 		).then(function(response){
// 		return {
// 			articles: response.data.response.docs,
// 		}
// 	});
// };



// Create a helpers object which we will export
var helpers = {
	getArticles: function(term, start, end){
		return axios.get(
		"https://api.nytimes.com/svc/search/v2/articlesearch.json" +
		"?api-key=2ba014e98c7a46ed818343e31f61e45f" +
		"&q=" + term +
		"&begin_date=" + start +
		"&end_date=" + end
		).then(function(response){
		return {
			articles: response.data.response.docs,
		}
	});
	},
	saveArticle: function(article){
		return axios.post("/api/save", {
			headline: article.headline.main,
			pub_date: article.pub_date,
			web_url: article.web_url
		})
		.then(function(response) {
			console.log(response);
		})
	}
}

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;