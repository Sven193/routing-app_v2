import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/index';

import Map from '../maps/google_maps';

import { Link } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from '../requireAuth';


class NewInput extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {	
						adress: '', 
						owner: '', 
						city: '', 
						floor: '', 
						year: '', 
						description: '',
		};
	}

	onSubmit(values) {
		event.preventDefault();

		const data = {
			adress: this.state.adress, 
			owner: this.state.owner, 
			city: this.state.city, 
			floor: this.state.floor, 
			year: this.state.year, 
			description: this.state.description
		}

		this.props.PostData(data)
			.then(() => {
				this.context.router.history.push('/datalist');
			});
	}

	changeAdress(event) {
		this.setState({adress: event.target.value});

	}

	changeOwner(event) {
		this.setState({owner: event.target.value});

	}

	changeCity(event) {
		this.setState({city: event.target.value});

	}

	changeFloor(event) {
		this.setState({floor: event.target.value});

	}

	changeYear(event) {
		this.setState({year: event.target.value});

	}

	changeDescription(event) {
		this.setState({description: event.target.value});

	}


	render() {
		const { fields: {adress, owner, city, floor, year, description}, handleSubmit, reset } = this.props;

		return (
			<div>
				<Link to="/datalist" className="btn btn-success"> Pregled upisanih podataka </Link>
				<div>
					<form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
							<div>
								<Field
									name="adress"
									placeholder="Adresa"
									component="input"
									onChange={this.changeAdress.bind(this)}
									/>
							</div>
							<div>
								<Field
									name="owner"	
									placeholder="Vlasnik"
									component="input"
									onChange={this.changeOwner.bind(this)}
								/>
							</div>
							<div>
								<Field
									name="city"	
									placeholder="Grad"
									component="input"
									onChange={this.changeCity.bind(this)}
								/>
							</div>
							<div>
								<Field	
									name="floor"
									type="number"
									placeholder="Etaža"
									component="input"
									onChange={this.changeFloor.bind(this)}
								/>
							</div>
							<div>
								<Field	
									name="year"
									type="number"
									placeholder="Godina otvaranja"
									component="input"
									onChange={this.changeYear.bind(this)}
								/>
							</div>
							<div>
								<Field
									name="description"
									placeholder="Dodatno"
									component="textarea"
									onChange={this.changeDescription.bind(this)}
								/>
							</div>
							<div style={{height: '100%', margin: '10px'}}>
								<Map lat={45.827193} lng={15.980900} />
							</div>
							<div>
								<button type="submit" className="btn btn-success" onClick={reset} style={{margin: '10px'}}> Pošalji </button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	};
} 


export default compose (
	connect(null, actions),
	reduxForm({
		form: 'InputForm',	
		fields: ['adress', 'owner', 'city', 'floor', 'year', 'description']})
)(requireAuth(NewInput));