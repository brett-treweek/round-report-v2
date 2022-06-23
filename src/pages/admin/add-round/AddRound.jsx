import React, { useState } from 'react';
import { useAppContext } from '../../../context/appContext';
import { useNavigate } from 'react-router-dom';

import StyledAddHazard, {
	AddHazardForm,
} from '../../add-hazard/AddHazard.styled';
import CancelButton from '../../../components/ui/cancel-button/CancelButton';
import Input from '../../../components/ui/input/input';
import { Button } from '../../../components/ui/button/Button.styled';
import Alert from '../../../components/ui/alert/Alert';
import Places from '../../../components/places/Places';

const AddRound = () => {
	// console.log('addRound page rendered');

	const {
		showAlert,
		displayAlert,
		isLoading,
		isEditing,
		// clearValues,
		// round,
		handleChange,
		createRound,
		editRound,
		roundNumber,
		suburb,
		startAddress,
		lpo,
		relay,
		postie,
	} = useAppContext();

	const navigate = useNavigate();

	// if (isEditing) {
	// }

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(roundNumber, suburb, startAddress, lpo, relay, postie);

		if (!roundNumber || !startAddress || !lpo || !relay) {
			displayAlert();
			return;
		}

		if (isEditing) {
			editRound();
			return;
		}
		
		createRound();

		setTimeout(() => {
			navigate(-1);
		}, 2000);
	};

	const handleRoundInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log('handleRoundChange', name, value);
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
					value={roundNumber}
					label="Round Number"
					type="number"
					handleChange={handleRoundInput}
					min="0"
					max="50"
				/>
				<Places
					name="startAddress"
					placeholder={startAddress}
					label="Start Address"
				/>
				<Places
					name="lpo"
					placeholder={lpo}
					label="LPO Address"
				/>
				<Places
					name="relay"
					placeholder={relay}
					label="Relay Address"
				/>
				<Input
					name="postie"
					value={postie}
					label="Postie"
					type="text"
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

export default AddRound;
