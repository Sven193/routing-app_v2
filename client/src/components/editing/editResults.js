import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../requireAuth';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { PostResults } from '../../actions/index';
import { compose } from 'redux';

class editResults extends Component {
	static contextTypes = {
		router: PropTypes.object
	}


	constructor(props) {
		super(props);

		this.state = {
			editResults: ''
		};
	};

	onSubmit(values) {
		event.preventDefault();

		this.props.PostResults(this.state.editResults)
			.then(() => {
				this.context.router.history.push('/results');
			});
	}

	changeEditResults(event) {
		this.setState({editResults: event.target.value})
	};

	render() {
		const {handleSubmit, reset }= this.props;

		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">editResults</h4>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
							<Field
								name="editParticipate"
								component="textarea"
								onChange={this.changeEditResults.bind(this)}
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
	connect(null, {PostResults}),
	reduxForm({
	form: "pages", 
	fields: ['editResults']})
)(requireAuth(editResults));