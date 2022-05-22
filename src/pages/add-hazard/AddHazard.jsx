import React from 'react';
import StyledAddHazard, {
	AddHazardForm,
	AddImageContainer,
  IconContainer,
} from './AddHazard.styled';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import { folder, camera } from '../../assets/icons';

const AddHazard = () => {
	return (
		<StyledAddHazard>
			<AddHazardForm>
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
				<Button width="100%">Submit</Button>
			</AddHazardForm>
		</StyledAddHazard>
	);
};

export default AddHazard;
