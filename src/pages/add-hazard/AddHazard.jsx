import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledAddHazard, {
	AddHazardForm,
	AddImageContainer,
	IconContainer,
} from './AddHazard.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import Input from '../../components/ui/input/input';
import { Button } from '../../components/ui/button/Button.styled';
import Alert from '../../components/ui/alert/Alert';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const AddHazard = () => {
	const [image, setImage] = useState();

	const {
		showAlert,
		displayAlert,
		isLoading,
		isEditing,
		hazardRound,
		hazardTypeOptions,
		hazardType,
		hazardAddress,
		handleChange,
		clearValues,
		uploadImage,
		createHazard,
	} = useAppContext();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!hazardRound || !hazardType || !hazardAddress) {
			displayAlert();
			return;
		}
		if (isEditing) {
			// eventually edit hazard()
			return;
		}
		createHazard();

		setTimeout(() => {
			navigate(-1);
		}, 2000);
	};

	const handleHazardInput = (e) => {
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
				<h1>{isEditing ? 'Edit Hazard' : 'Add Hazard'}</h1>
				{showAlert && <Alert />}
				<Input
					name="hazardAddress"
					value={hazardAddress}
					label="Hazard Address"
					type="text"
					handleChange={handleHazardInput}
				/>
				<Input
					name="hazardRound"
					value={hazardRound}
					label="Round Number"
					type="number"
					handleChange={handleHazardInput}
					min="0"
					max="50"
				/>
				<Input
					name="hazardType"
					value={hazardType}
					label="Hazard Type"
					type="select"
					options={hazardTypeOptions}
					handleChange={handleHazardInput}
				/>

				<AddImageContainer>
					<h2>Image</h2>
					<IconContainer>
						<input
							type="file"
							onChange={(e) => setImage(e.target.files[0])}
						/>
						<button onClick={(e) => {
							e.preventDefault()
							uploadImage(image)}}>
							confirm image
						</button>
						{/* <Icon
							className="icon"
							icon="bxs:folder-plus"
							height="45"
						/> */}
						{/* <Icon
							className="icon"
							icon="bxs:camera-plus"
							height="45"
						/> */}
					</IconContainer>
				</AddImageContainer>
				<Button
					type="submit"
					onClick={handleSubmit}
					width="100%"
					disabled={isLoading}
				>
					Submit
				</Button>
				<Button
					onClick={(e) => {
						e.preventDefault();
						clearValues();
					}}
					width="40%"
				>
					Clear
				</Button>
				<CancelButton onClick={handleCancel} />
			</AddHazardForm>
		</StyledAddHazard>
	);
};

export default AddHazard;
