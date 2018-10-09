import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPages } from '../../actions/index';

class Participate extends Component{
	componentDidMount() {
		this.props.FetchPages();
	}

	renderParticipate(renderParticipateData) {
	if (_.isEmpty(this.props.data_participate)) {
			return <div>Loading...</div>
		} else {
			return <div>{this.props.data_participate.participate}</div>
		};
	};

	render() { 
		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">Participate</h4>
					<div className="card-text">{this.renderParticipate()}</div>
				</div>
			</div>
		);
	};
};

function mapStateToProps(state) {
	return { data_participate: state.data };
}

export default connect(mapStateToProps, {FetchPages})(Participate);