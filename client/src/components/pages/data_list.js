import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import requireAuth from '../requireAuth';

import { FetchData, deleteData } from '../../actions/index';

class DataList extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	componentDidMount(){
		this.props.FetchData();
	}

	clickHandler(e, data) {
		this.props.deleteData(data);
	}

	renderData(DataRender) {
		if (_.isEmpty(this.props.data)) {
			return <td>Loading...</td>
		} else {
			return Object.keys(this.props.data).map((post, key) => (
			<tr key={post} post={post} id={key}>
				<td>{this.props.data[post].adress}</td>
				<td>{this.props.data[post].city}</td>
				<td>{this.props.data[post].owner}</td>
				<td>
					<Link to={`/data/${post}`}>
						detaljnije
					</Link>
				</td>
				<td><button
					onClick = {(e) => this.clickHandler(e, [post])}
					className="btn btn-outline-secondary btn-danger">
					Obriši
				</button></td>
			</tr>
		));
		}
	}
	

	render() {
		return (
			<div>
				<Link to="/newinput" className="btn btn-primary float-left"> Nova stavka </Link>
				<table className="table table-hover bg-light">
					<thead>
						<tr>
							<th>Adresa</th>
							<th>Grad</th>
							<th>Vlasnik</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
				</table>
				<table className="table table-hover table-fixed bg-light">
					<tbody>
							{this.renderData()}
					</tbody>
				</table>
			</div>
		);
	};
}

function mapStateToProps(state) {
	return { data: state.data };
}

export default connect(mapStateToProps, {FetchData, deleteData})(requireAuth(DataList));