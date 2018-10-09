import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authen';
import ReactTimeout from 'react-timeout';
import PropTypes from 'prop-types';
import requireAuth from '../requireAuth';
import { compose } from 'redux';



class Logout extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentDidMount() {
		setTimeout(() => this.props.logout(this.context.router.history.push('/')), 1000);
	}

	render() {
		return (
			<div> You have been successfully logged out! </div>
		);
	};
}

export default connect(null, actions)(requireAuth(Logout));