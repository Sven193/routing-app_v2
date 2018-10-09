import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../requireAuth';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { PostParticipate } from '../../actions/index';
import { compose } from 'redux';

class editParticipate extends Component {
	static contextTypes = {
		router: PropTypes.object
	}


	constructor(props) {
		super(props);

		this.state = {
			editParticipate: ''
		};
	};

	onSubmit(values) {
		event.preventDefault();

		this.props.PostParticipate(this.state.editParticipate)
			.then(() => {
				this.context.router.history.push('/participate');
			});
	}

	changeEditParticipate(event) {
		this.setState({editParticipate: event.target.value})
	};

	render() {
		const {handleSubmit, reset }= this.props;

		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">editParticipate</h4>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
							<Field
								name="editParticipate"
								component="textarea"
								onChange={this.changeEditParticipate.bind(this)}
							/>
						</div>
						<div>
							<button type="submit" className="btn btn-success" onClick={reset}>Pošalji</button>
						</div>
					</form>
				</div>
			</div>
		);
	};
};


export default compose(
	connect(null, {PostParticipate}),
	reduxForm({
	form: "pages", 
	fields: ['editParticipate']})
)(requireAuth(editParticipate));