import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import StyledSharedLayout from './SharedLayout.styled';

const SharedLayout = () => {
	return (
		<StyledSharedLayout>
			<h1>shared layout</h1>
			<nav>
				<Link to="/admin">Hazards</Link>
				<Link to="all-rounds">Rounds</Link>
				<Link to="all-users">Users</Link>
			</nav>
			<Outlet />
		</StyledSharedLayout>
	);
};

export default SharedLayout;
