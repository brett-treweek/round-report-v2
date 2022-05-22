import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import { LoginForm, StyledLogin } from './Login.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';

// let initialLoginState = {
// 	email: '',
// 	password: '',
//   isValid: ''
// };

const Login = () => {
	const navigate = useNavigate();

	// const [loginState, setLoginState] = useState(initialLoginState);

	// function to handle submit of login or signup.
	const handleSubmit = async (e) => {
		e.preventDefault();
		navigate('/');
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
				<Input
					id="username"
					label="Username"
					type="username"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					autoComplete="off"
					// isValid={passwordIsValid}
					// value={passwordState.value}
					// onChange={passwordChangeHandler}
					// onBlur={validatePasswordHandler}
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
