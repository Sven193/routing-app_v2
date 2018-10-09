import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPages } from '../../actions/index';


class About extends Component{
	componentDidMount() {
		this.props.FetchPages();
	}

	renderAbout(renderAboutData) {
	if (_.isEmpty(this.props.data_about)) {
			return <div>Loading...</div>
		} else {
			return <div>{this.props.data_about.about}</div>
		};
	};

	render() { 
		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">About</h4>
					<div className="card-text">{this.renderAbout()}</div>
				</div>
			</div>
		);
	};
};

function mapStateToProps(state) {
	return { data_about: state.data };
}

export default connect(mapStateToProps, {FetchPages})(About);