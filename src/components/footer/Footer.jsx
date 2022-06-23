import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import StyledFooter, { HazardButton } from './Footer.styled';
import { Icon } from '@iconify/react';
// import { Button } from '../ui/button/Button.styled';
import { useAppContext } from '../../context/appContext';

const Footer = () => {
	// console.log('footer component rendered');
	const { user, isAdmin } = useAppContext();
	const navigate = useNavigate();
	const location = useLocation();
	// console.log(location);

	const addHazardHandler = () => {
		if (!user) {
			navigate('/login');
		} else {
			navigate('/add-hazard');
		}
	};

	const profileClickHandler = () => {
		if (location.pathname !== '/user-profile') {
			navigate('/user-profile');
		} else {
			navigate(-1);
		}
	};

	return (
		<StyledFooter>
			<div className="footer-inner-container">
				<Link to="/" className="link">
					<Icon className="icon" icon="entypo:home" />
				</Link>
				{isAdmin && (
					<Link to="/admin" className="link">
						<Icon
							icon="eos-icons:admin"
							className='icon'
						/>
					</Link>
				)}
				<Icon
					type="button"
					onClick={addHazardHandler}
					className="icon add-hazard"
					icon="carbon:add"
					color="white"
					height="40"
				/>

				{user ? (
					<div onClick={profileClickHandler}>
						<Icon className="icon" icon="bxs:user" />
					</div>
				) : (
					<Link to="/login" className="link">
						<Icon className="icon" icon="bxs:user" />
					</Link>
				)}
			</div>
		</StyledFooter>
	);
};

export default Footer;
