import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import { LoginForm, StyledLogin } from './Login.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import Alert from '../../components/ui/alert/Alert';
import { useAppContext } from '../../context/appContext';

let initialLoginState = {
	username: '',
	password: '',
};

const Login = () => {
	const navigate = useNavigate();

	const [loginState, setLoginState] = useState(initialLoginState);

	const { displayAlert } = useAppContext();

	const handleChange = (e) => {
		setLoginState({ ...loginState, [e.target.name]: e.target.value });
	};

	// function to handle submit of login or signup.
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { username, password } = loginState;
		if (!username || !password) {
			displayAlert();
			return
		}
		console.log(loginState);
		// navigate('/');
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	//   const emailChangeHandler = () => {}
	//   const validateEmailHandler = () => {}
	//   const emailIsValid = () => {}

	//   const passwordChangeHandler = () => {}
	//   const validatePasswordHandler = () => {}
	//   const passwordIsValid = () => {}

	return (
		<StyledLogin>
			<LoginForm onSubmit={handleSubmit}>
				<CancelButton onClick={handleCancel} />
				<h1>Log In</h1>
				<Alert />
				<Input
					id="username"
					label="Username"
					type="username"
					name="username"
					value={loginState.value}
					handleChange={handleChange}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					name="password"
					value={loginState.value}
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
			</LoginForm>
		</StyledLogin>
	);
};

export default Login;
