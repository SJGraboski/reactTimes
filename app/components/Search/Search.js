var React = require('react');

// create the search form component
var Search = React.createClass({

	getInitialState: function() {
    return {
    	term: '', 
    	start: '',
    	end: ''
    } 
  },
  handleTopicChange: function(e) {
    this.setState({term: e.target.value});
  },
  handleStartChange: function(e) {
    this.setState({start: e.target.value});
  },
  handleEndChange: function(e) {
    this.setState({end: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var term = this.state.term.trim();
    var start = this.state.start.trim();
    var end = this.state.end.trim();
    if (!term || !start || !end) {
      return;
    }
    this.props.onSearchSubmit(term, start, end);
    return false
  },

	render: function(){

		return (
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
						</div>
						<div className="panel-body">


							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h4 className=""><strong>Topic</strong></h4>
									<input 
										type="text" 
										className="form-control" 
										id="search_topic"
										placeholder="Enter a topic"
										value={this.state.term}
					          onChange={this.handleTopicChange}

									/>

									<h4 className=""><strong>Start Year</strong></h4>
									<input 
										type="text" 
										className="form-control" 
										id="search_start"
										placeholder="Start Date"
										value={this.state.start}
										onChange={this.handleStartChange}
									/>

									<h4 className=""><strong>End Year</strong></h4>
									<input 
										type="text" 
										className="form-control" 
										id="search_start"
										placeholder="Start Date"
										value={this.state.end}
										onChange={this.handleEndChange}
									/>

								</div>

								
								<div className="pull-right">
									<button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
								</div>
							</form>

						</div>
					</div>

				</div>
			</div>
		)
	},
})

module.exports = Search;
