// search form component
// =====================

// require react
var React = require('react');

// create the search form component
var Search = React.createClass({
	// get initial state
	getInitialState: function() {
    return {
    	term: '', 
    	start: '',
    	end: ''
    } 
  },
  // handle topic changes in form
  handleTopicChange: function(e) {
    this.setState({term: e.target.value});
  },
  // hand startDate change in form
  handleStartChange: function(e) {
    this.setState({start: e.target.value});
  },
  // handle endDate change in form
  handleEndChange: function(e) {
    this.setState({end: e.target.value});
  },
  // handle submit
  handleSubmit: function(e) {
    e.preventDefault();
    // grab the term, start and end from the form, and trim them
    var term = this.state.term.trim();
    var start = this.state.start.trim();
    var end = this.state.end.trim();
    if (!term || !start || !end) {
      return;
    }
    // make the onSearchSubmit prop = to the term, start and end.
    // this lets the parent component grab this information,
    // making it possible to place the new articles in the results
    this.props.onSearchSubmit(term, start, end);
    return false
  },
  // render the component
	render: function(){

		return (
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
						</div>
						<div className="panel-body">

							{/* form will use handleSubmit as the method */}
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h4 className=""><strong>Topic</strong></h4>
									<input 
										type="text" 
										className="form-control" 
										id="search_topic"
										placeholder="Enter a topic"
										value={this.state.term /* this state is this elements value */} 
					          onChange={this.handleTopicChange /* run this when input changes */}

									/>

									<h4 className=""><strong>Start Year</strong></h4>
									<input 
										type="text" 
										className="form-control" 
										id="search_start"
										placeholder="Start Date (YYYYMMDD)"
										value={this.state.start /* this state is this elements value */}
										onChange={this.handleStartChange /* run this when input changes */}
									/>

									<h4 className=""><strong>End Year</strong></h4>
									<input 
										type="text" 
										className="form-control" 
										id="search_start"
										placeholder="End Date (YYYYMMDD)"
										value={this.state.end /* this state is this elements value */}
										onChange={this.handleEndChange /* run this when input changes */}
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

// export Search
module.exports = Search;