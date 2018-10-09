import React, { Component, PropTypes } from 'react';
import { FetchData, deleteData } from '../../actions/index';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import requireAuth from '../requireAuth';


class postDetails extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	componentDidMount(){
		this.props.FetchData()
	}

	clickHandler(e, data) {
		this.props.deleteData(data)
			.then(() => {
				this.context.router.history.push('/datalist');
			});
	}

	renderPost() {
		if (_.isEmpty(this.props.data)) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="bg-light details-list">
					<table className="table table-bordered">
					<th><h5>Adresa:</h5></th>
							<td><div>{this.props.data[this.props.match.params.id].adress}</div></td>
					</table>
					<table className="table table-bordered">
					<th><h5>Grad:</h5></th>
							<td><div>{this.props.data[this.props.match.params.id].city}</div></td>
					</table>
					<table className="table table-bordered">
					<th><h5>Vlasnik:</h5></th>
							<td><div>{this.props.data[this.props.match.params.id].owner}</div></td>
					</table>
					<table className="table table-bordered">
					<th><h5>Godina otvaranja:</h5></th>
							<td><div>{this.props.data[this.props.match.params.id].year}</div></td>
					</table>
					<table className="table table-bordered">
					<th><h5>Etaža:</h5></th>
							<td><div>{this.props.data[this.props.match.params.id].floor}</div></td>
					</table>
					<table className="table table-bordered">
					<th><h5>Dodatno:</h5></th>
							<td><div>{this.props.data[this.props.match.params.id].description}</div></td>
					</table>
					<button
						onClick = {(e) => this.clickHandler(e, [this.props.match.params.id])}
						className="btn btn-outline-secondary btn-danger">
						Obriši
					</button>				
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				<Link to="/datalist" className="btn btn-primary main-page float-left"> Vrati se </Link>
				<Link to="/newinput" className="btn btn-primary input-page"> Nova stavka </Link>
				<div>
					<h2>Podaci o stavci</h2>
					{this.renderPost()};
				</div>

			</div>
		);
	};
}

function mapStateToProps(state) {
	return { data: state.data };
}

export default connect(mapStateToProps, {FetchData, deleteData})(requireAuth(postDetails));