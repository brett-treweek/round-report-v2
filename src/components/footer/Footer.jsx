import React from 'react';
import StyledFooter, { BackgroundCircle, HazardButton } from './Footer.styled';
import { Icon } from '@iconify/react';

const Footer = () => {
	return (
			<StyledFooter>
				<div className="footer-inner-container">
					<Icon icon="entypo:home" color="#31313D" height="40" />
					<HazardButton>Add Hazard</HazardButton>
					<Icon icon="bxs:user" color="#31313D" height="40" />
				</div>
			</StyledFooter>
	);
};

export default Footer;
