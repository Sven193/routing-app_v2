import React from 'react';
import Header from './header';
import NavBar from './navbar';

export default ({ children }) => {
	return (
		<div>
			<div className="header">
				<Header />
			</div>
			<NavBar />
			{ children }
		</div>
	);
};