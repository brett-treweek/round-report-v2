import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import { LoginForm, StyledLogin } from './Login.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import Alert from '../../components/ui/alert/Alert';
import { useAppContext } from '../../context/appContext';
import { Footer } from '../../components';

let initialLoginState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const Login = () => {
	// console.log('login page rendered');

	const navigate = useNavigate();
	const [loginState, setLoginState] = useState(initialLoginState);
	const {
		user,
		displayAlert,
		isLoading,
		showAlert,
		registerUser,
		loginUser,
	} = useAppContext();

	// function to toggle isMember- login/signUp
	const toggleMember = () => {
		setLoginState({ ...loginState, isMember: !loginState.isMember });
	};

	// function to handle input change of form
	const handleChange = (e) => {
		setLoginState({ ...loginState, [e.target.name]: e.target.value });
	};

	// function to handle cancel btn.
	const handleCancel = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	// function to handle submit of login or signup. Enter button is not working!
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = loginState;

		if (!email || !password) {
			displayAlert();
			return;
		}

		const currentUser = { name, email, password };
		if (isMember) {
			loginUser(currentUser);
		} else {
			registerUser(currentUser);
		}
	};

	// function to navigate to home page after successful signIn
	// I think this is rerendering page twice!!!
	useEffect(() => {
		console.log('useEffect running');
		if (user) {
			setTimeout(() => {
				navigate('/');
			}, 1000);
		}
	}, [user, navigate]);

	return (
		<StyledLogin>
			<LoginForm onSubmit={handleSubmit}>
				<h1>{loginState.isMember ? 'Log In' : 'Register'}</h1>
				{showAlert && <Alert />}
				{!loginState.isMember && (
					<Input
						id="name"
						label="Name"
						type="text"
						name="name"
						value={loginState.name}
						handleChange={handleChange}
					/>
				)}

				<Input
					id="email"
					label="Email"
					type="email"
					name="email"
					value={loginState.email}
					handleChange={handleChange}
					autoComplete="username"
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					name="password"
					value={loginState.password}
					handleChange={handleChange}
					autoComplete="current-password"
				/>
				<Button
					type="submit"
					className="button"
					width="100%"
					disabled={isLoading}
				>
					Go
				</Button>
				<p>
					{loginState.isMember
						? 'Need to sign up? '
						: 'Already registered? '}
					<button
						className="switch"
						type="button"
						onClick={toggleMember}
					>
						{loginState.isMember ? 'Register' : 'LogIn'}
					</button>
				</p>
				<CancelButton onClick={handleCancel} />
			</LoginForm>
			<Footer/>
		</StyledLogin>
	);
};

export default Login;
