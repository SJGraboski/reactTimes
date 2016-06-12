var React = require('react');

var App = React.createClass({

// refer to everything
	render: function() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		)
	}
})

module.exports = App;