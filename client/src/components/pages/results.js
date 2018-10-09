import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPages } from '../../actions/index';

class Results extends Component{
	componentDidMount() {
		this.props.FetchPages();
	}

	renderResults(renderResultsData) {
	  if (_.isEmpty(this.props.data_results)) {
			return <div>Loading...</div>
		} else {
			return <div>{this.props.data_results.results}</div>
		};
	};

	render() { 
		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">Results</h4>
					<div className="card-text">{this.renderResults()}</div>
				</div>
			</div>
		);
	};
};

function mapStateToProps(state) {
	return { data_results: state.data };
}

export default connect(mapStateToProps, {FetchPages})(Results);