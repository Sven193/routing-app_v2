import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../requireAuth';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { PostAbout } from '../../actions/index';
import { compose } from 'redux';
import ReactPlaceholder from 'react-placeholder';

class editAbout extends Component {
	static contextTypes = {
		router: PropTypes.object
	}


	constructor(props) {
		super(props);

		this.state = {
			editAbout: ''
		};
	};

	onSubmit(values) {
		event.preventDefault();

		this.props.PostAbout(this.state.editAbout)
			.then(() => {
				this.context.router.history.push('/about');
			});
	}

	changeEditAbout(event) {
		this.setState({editAbout: event.target.value})
	};

	render() {
		const {handleSubmit, reset }= this.props;

		return (
			<div className="card">
				<div className="bg-light card-body">
					<h4 className="card-title">editAbout</h4>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
							<Field
								name="editAbout"
								component="textarea"
								onChange={this.changeEditAbout.bind(this)}
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
	connect(null, {PostAbout}),
	reduxForm({
	form: "pages", 
	fields: ['editAbout']})
)(requireAuth(editAbout));