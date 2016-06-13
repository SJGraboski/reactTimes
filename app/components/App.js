var React = require('react');

var App = React.createClass({

// main component app. Takes in the other routes
	render: function() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		)
	}
})

module.exports = App;