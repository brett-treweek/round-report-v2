import React from 'react';
import StyledAddHazard, {
	AddHazardForm,
	AddImageContainer,
  IconContainer,
} from './AddHazard.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import { folder, camera } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';


const AddHazard = () => {
		const navigate = useNavigate();


	const handleSubmit = (e) => {
		e.preventDefault()
		navigate('/');
	}

		const handleCancel = (e) => {
			e.preventDefault();
			navigate(-1);
		};


	return (
		<StyledAddHazard>
			<AddHazardForm>
				<CancelButton onClick={handleCancel} />
				<h1>Add Hazard</h1>
				<Input
					id="address"
					label="Address"
					type="text"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
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
					id="hazardType"
					label="Hazard Type"
					type="dropdown"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<Input
					id="message"
					label="Message"
					type="text"
					// isValid={emailIsValid}
					// value={loginState.value}
					// onChange={emailChangeHandler}
					// onBlur={validateEmailHandler}
				/>
				<AddImageContainer>
					<h2>Image</h2>
					<IconContainer>
						<img src={folder} alt="folder" />
						<img src={camera} alt="camera" />
					</IconContainer>
				</AddImageContainer>
				<Button onClick={handleSubmit} width="100%">
					Submit
				</Button>
			</AddHazardForm>
		</StyledAddHazard>
	);
};

export default AddHazard;
