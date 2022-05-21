import React, { useState } from 'react';
import Input from '../../components/ui/input/input';
import { LoginForm, StyledLogin } from './Login.styled';

let initialLoginState = {
	email: '',
	password: '',
  isValid: ''
};

const Login = () => {
	const [loginState, setLoginState] = useState(initialLoginState);

	// function to handle submit of login or signup.
	const handleSubmit = async (e) => {
    e.preventDefault()
  };

  const emailChangeHandler = () => {}
  const validateEmailHandler = () => {}
  const emailIsValid = () => {}

  const passwordChangeHandler = () => {}
  const validatePasswordHandler = () => {}
  const passwordIsValid = () => {}


	return (
		<StyledLogin>
			<h1>Log In</h1>
			<LoginForm onSubmit={handleSubmit}>
				<Input
					id="email"
					label="Email"
					type="email"
					isValid={emailIsValid}
					value={loginState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					// isValid={passwordIsValid}
					// value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				{/* {error ? (
					<div>
						<p className="error-text">
							The provided credentials are incorrect
						</p>
					</div>
				) : null} */}

				<button type="submit" className="button">
					Sign In
				</button>
			</LoginForm>
		</StyledLogin>
	);
};

export default Login;
