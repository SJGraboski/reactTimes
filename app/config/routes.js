var React = require('react');

// This will draw from each of the components
var App = require('../components/App');
var Query = require('../components/Query');
var Saved = require('../components/Saved');


/*Note how we include the Profile component as a route. 
We don't need to include the sub components like Repos or User Profile
These are already included here.
*/
// var Profile = require('../components/Search');

// We will then pull the router 
var Router = require('react-router');
var Route = Router.Route;

//  This is the catchall route
var IndexRoute	= Router.IndexRoute;

module.exports = (
	// When a user goes to root they will be served the Main component
	// The instructions will then go to our app.js
	// If no other route matches... Then run the IndexRoute.	

	// When we go to the main path it will put in the menu

	/*But it will also drop in the home contents for any other path*
	/*In effect home is a child of the main. */
	<Route path="/" component={App}>
	
		{/* If user selects the profile path... we get the Profile component*/}
			<Route path="/saved" component={Saved} />
			<Route path="/search" component={Query} />


		{/*If user selects any other path... we get the Search Route*/}
				<IndexRoute component={Query} />

	</Route>

);
