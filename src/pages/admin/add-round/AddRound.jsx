import React from 'react'
import { useAppContext } from '../../../context/appContext';
import {useNavigate} from 'react-router-dom'

import StyledAddHazard, {
	AddHazardForm,
} from '../../add-hazard/AddHazard.styled';
import CancelButton from '../../../components/ui/cancel-button/CancelButton';
import Input from '../../../components/ui/input/input';
import {
	Button,
} from '../../../components/ui/button/Button.styled';
import Alert from '../../../components/ui/alert/Alert';

const AddRound = () => {
	// console.log('addRound page rendered');
	const {
		showAlert,
		displayAlert,
		isLoading,
		isEditing,
		handleChange,
		clearValues,
	} = useAppContext();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
        console.log('round created');
		// if (!roundNumber || !roundStart || !roundLpo) {
		// 	displayAlert();
		// 	return;
		// }

		// if (isEditing) {
		// 	editRound()
		// 	return;
		// }
		// createRound();

		setTimeout(() => {
			navigate(-1);
		}, 1000);
	};

	const handleRoundInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		handleChange({ name, value });
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<StyledAddHazard>
			<AddHazardForm>
				<h1>{isEditing ? 'Edit Round' : 'Create New Round'}</h1>
                <p>roundNumber</p>
                <p>hazards</p>
                <p>suburb</p>
                <p>startAddress- address, latlng </p>
                <p>lpo - address, latlng </p>
                <p>relay- address, latlng </p>
                <p>postie</p>
                <p>createdBy</p>
				{showAlert && <Alert />}
				<Input
					name="roundNumber"
					// value={roundNumber}
					label="Round Number"
					type="number"
					handleChange={handleRoundInput}
					min="0"
					max="50"
				/>
				<Input
					name="roundStart"
					// value={roundStart}
					label="Start Address"
					handleChange={handleRoundInput}
				/>
				<Input
					name="roundLpo"
					// value={roundStart}
					label="LPO Address"
					handleChange={handleRoundInput}
				/>
				<Input
					name="roundRelay"
					// value={roundStart}
					label="Relay Address"
					handleChange={handleRoundInput}
				/>
				<Input
					name="roundPostie"
					// value={roundStart}
					label="Postie"
					handleChange={handleRoundInput}
				/>
				<Button
					type="submit"
					onClick={handleSubmit}
					width="100%"
					disabled={isLoading}
				>
					Submit
				</Button>
				{/* <Button
					onClick={(e) => {
						e.preventDefault();
						clearValues();
					}}
					width="100%"
				>
					Clear
				</Button> */}
				<CancelButton onClick={handleCancel} />
			</AddHazardForm>
		</StyledAddHazard>
	);
};

export default AddRound