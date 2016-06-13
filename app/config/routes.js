var React = require('react');

// This will draw from each of the components
var App = require('../components/App');
var Query = require('../components/Query');
var Saved = require('../components/Saved');


// We will then pull the router 
var Router = require('react-router');
var Route = Router.Route;

//  This is the catchall route
var IndexRoute	= Router.IndexRoute;

module.exports = (
	// When a user goes to root they will be served the App component
	<Route path="/" component={App}>
	
		{/* If user selects the saved path we get the saved component*/}
			<Route path="/saved" component={Saved} />
			<Route path="/search" component={Query} />


		{/*If user selects any other path we get the query route*/}
				<IndexRoute component={Query} />

	</Route>

);
