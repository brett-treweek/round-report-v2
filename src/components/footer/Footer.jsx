import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter, { HazardButton } from './Footer.styled';
import { Icon } from '@iconify/react';
import { useAppContext } from '../../context/appContext';

const Footer = () => {
	const { logoutUser, user } = useAppContext();
	console.log(user);
	return (
		<StyledFooter>
			<div className="footer-inner-container">
				<Link to="/">
					<Icon className="icon" icon="entypo:home" />
				</Link>
				<Link to="/addHazard">
					<HazardButton>
						<Icon icon="carbon:add" color="white" height="40" />
					</HazardButton>
				</Link>
				{user ? (
					<button onClick={logoutUser}>Logout</button>
				) : (
					<Link to="/login">
						<Icon className="icon" icon="bxs:user" />
					</Link>
				)}
			</div>
		</StyledFooter>
	);
};

export default Footer;
