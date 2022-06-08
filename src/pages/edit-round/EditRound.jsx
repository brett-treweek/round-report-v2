import React from 'react';
import StyledEditRound, { EditRoundForm } from './EditRound.styled';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import { useNavigate } from 'react-router-dom';

const EditRound = () => {
	//   console.log('editRound page rendered');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/');
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<StyledEditRound>
			<EditRoundForm>
				<CancelButton onClick={handleCancel} />
				<h1>Edit Round</h1>
				<Input
					id="roundNumber"
					label="Round Number"
					type="number"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Input
					id="start"
					label="Start Address"
					type="text"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Input
					id="relay"
					label="Relay Address"
					type="text"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Input
					id="lpo"
					label="LPO Address"
					type="text"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Input
					id="postie"
					label="Postie"
					type="text"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Button onClick={handleSubmit} width="100%">
					Submit
				</Button>
			</EditRoundForm>
		</StyledEditRound>
	);
};

export default EditRound;
