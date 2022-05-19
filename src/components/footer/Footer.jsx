import React from 'react';
import StyledFooter, { HazardButton } from './Footer.styled';



const Footer = () => {

	return (
		<StyledFooter>
			<p>Home</p>
			<HazardButton>
				Add Hazard
			</HazardButton>
			<p>Profile</p>
		</StyledFooter>
	);
};

export default Footer;
