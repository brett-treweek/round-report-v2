import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StyledFooter, { HazardButton } from './Footer.styled';
import { Icon } from '@iconify/react';
import { Button } from '../ui/button/Button.styled';
import { useAppContext } from '../../context/appContext';

const Footer = () => {
	const { logoutUser, user } = useAppContext();
	const navigate = useNavigate();

	const addHazardHandler = () => {
		if (!user) {
			navigate('/login');
		} else {
			navigate('/addHazard');
		}
	};

	return (
		<StyledFooter>
			<div className="footer-inner-container">
				<Link to="/">
					<Icon className="icon" icon="entypo:home" />
				</Link>

				<HazardButton onClick={addHazardHandler}>
					<Icon icon="carbon:add" color="white" height="40" />
				</HazardButton>

				{user ? (
					<Button
						className="logoutBtn"
						height="70px"
						width="70px"
						br="100%"
						onClick={()=> {
							logoutUser(user)
							navigate('/')
						}}
					>
						Logout
					</Button>
				) : (
					<Link className="loginBtn" to="/login">
						<Icon className="icon" icon="bxs:user" />
					</Link>
				)}
			</div>
		</StyledFooter>
	);
};

export default Footer;
