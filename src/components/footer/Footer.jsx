import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter, { HazardButton } from './Footer.styled';
import { Icon } from '@iconify/react';

const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer-inner-container">
				<Link to="/">
					<Icon className='icon' icon="entypo:home" />
				</Link>
				<Link to="/addHazard">
					<HazardButton>Add Hazard</HazardButton>
				</Link>
				<Link to="/login">
					<Icon className='icon' icon="bxs:user" />
				</Link>
			</div>
		</StyledFooter>
	);
};

export default Footer;
