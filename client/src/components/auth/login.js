import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, reset } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/authen';

class Login extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit = (formProps) => {
		this.props.signin(formProps, () => {
			this.context.router.history.push('/editabout')
		});
	};

	render() {
		const { handleSubmit, reset } = this.props;

		return (
			<form className="login" onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<Field
						name="email"
						id="email"
						type="text"
						component="input"
						autoComplete="off"
						placeholder="Username"
					/>
				</fieldset>
				<fieldset>
					<Field
						name="password"
						id="password"
						type="password"
						component="input"
						autoComplete="off"
						placeholder="Password"
					/>
				</fieldset>
				<div id="invalidLogin">
					{this.props.errorMessage}
				</div>
				<button onCick={reset} type='submit'>Login!</button>
			</form>
		);
	};
};

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({form: 'signin'})
)(Login);