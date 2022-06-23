import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import StyledSharedLayout from './SharedLayout.styled';

const SharedLayout = () => {
	//   console.log('shared layout rendered');

	return (
		<StyledSharedLayout>
			<h1>Administration</h1>
			<nav>
				<Link to="/admin">Hazards</Link>
				<Link to="all-users">Users</Link>
				<Link to="all-rounds">Rounds</Link>
				<Link to="/">Home</Link>
			</nav>
			<Outlet />
		</StyledSharedLayout>
	);
};

export default SharedLayout;
