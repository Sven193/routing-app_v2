import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPages } from '../../actions/index';

class Field extends Component{
	componentDidMount() {
		this.props.FetchPages();
	}

	renderField(renderFieldData) {
	if (_.isEmpty(this.props.data_field)) {
			return <div>Loading...</div>
		} else {
			return <div>{this.props.data_field.field}</div>
		};
	};

	render() { 
		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">Field</h4>
					<div className="card-text">{this.renderField()}</div>
				</div>
			</div>
		);
	};
};

function mapStateToProps(state) {
	return { data_field: state.data.gallery };
}

export default connect(mapStateToProps, {FetchPages})(Field);