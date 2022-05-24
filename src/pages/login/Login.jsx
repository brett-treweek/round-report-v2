import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import { LoginForm, StyledLogin } from './Login.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import Alert from '../../components/ui/alert/Alert';
import { useAppContext } from '../../context/appContext';

let initialLoginState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const Login = () => {
	const navigate = useNavigate();

	const [loginState, setLoginState] = useState(initialLoginState);

	const { displayAlert, isLoading, showAlert, registerUser } =
		useAppContext();

	const handleChange = (e) => {
		setLoginState({ ...loginState, [e.target.name]: e.target.value });
	};

	// function to handle submit of login or signup.
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = loginState;
		if (!email || !password) {
			displayAlert();
			return;
		}
		console.log(loginState);
		// navigate('/');
	};

	// function to handle cancel btn.
	const handleCancel = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	// function to toggle isMember- login/signUp
	const toggleMember = () => {
		setLoginState({ ...loginState, isMember: !loginState.isMember });
	};

	return (
		<StyledLogin>
			<LoginForm onSubmit={handleSubmit}>
				<CancelButton onClick={handleCancel} />
				<h1>{loginState.isMember ? 'Log In' : 'Register'}</h1>
				<Alert />
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
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					name="password"
					value={loginState.password}
					handleChange={handleChange}
				/>
				{/* {error ? (
					<div>
						<p className="error-text">
							The provided credentials are incorrect
						</p>
					</div>
				) : null} */}

				<Button type="submit" className="button" width="100%">
					Go
				</Button>
				<p>
					{loginState.isMember ? 'Need to sign up? ' : 'Already registered? '}
					<button className='switch' type='button' onClick={toggleMember}>
						{loginState.isMember ? 'Register' : 'LogIn'}
					</button>
				</p>
			</LoginForm>
		</StyledLogin>
	);
};

export default Login;
