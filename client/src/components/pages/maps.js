import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPages } from '../../actions/index';

class Maps extends Component{
	componentDidMount() {
		this.props.FetchPages();
	}

	renderMaps(renderMapsData) {
	  if (_.isEmpty(this.props.data_maps)) {
			return <div>Loading...</div>
		} else {
			return <div>{this.props.data_maps.maps}</div>
		};
	};

	render() { 
		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">Maps</h4>
					<div className="card-text">{this.renderMaps()}</div>
				</div>
			</div>
		);
	};
};

function mapStateToProps(state) {
	return { data_maps: state.data.gallery };
}

export default connect(mapStateToProps, {FetchPages})(Maps);