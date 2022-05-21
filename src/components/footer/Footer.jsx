import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter, { HazardButton } from './Footer.styled';
import { Icon } from '@iconify/react';

const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer-inner-container">
				<Link to="/">
					<Icon icon="entypo:home" color="#31313D" height="40" />
				</Link>
				<HazardButton>Add Hazard</HazardButton>
				<Link to="/login">
					<Icon icon="bxs:user" color="#31313D" height="40" />
				</Link>
			</div>
		</StyledFooter>
	);
};

export default Footer;
