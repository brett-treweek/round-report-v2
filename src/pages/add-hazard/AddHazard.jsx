import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledAddHazard, {
	AddHazardForm,
	AddImageContainer,
	// IconContainer,
} from './AddHazard.styled';
import CancelButton from '../../components/ui/cancel-button/CancelButton';
import Input from '../../components/ui/input/input';
import {
	Button,
	ButtonContainer,
} from '../../components/ui/button/Button.styled';
import Alert from '../../components/ui/alert/Alert';
import { useNavigate } from 'react-router-dom';
import Places from '../../components/places/Places';
import { Footer } from '../../components';

const AddHazard = () => {
	// console.log('addHazard page rendered');
	const [image, setImage] = useState();
	const [imageAdded, setImageAdded] = useState(false);
	const imageInputRef = useRef();
	const confirmImageRef = useRef();
	const addImageRef = useRef();

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
		// clearValues,
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
		if (image && !imageAdded) {
			displayAlert('Please confirm image')
			return
		}
		if (isEditing) {
			// eventually edit hazard()
			return;
		}
		createHazard();

		setTimeout(() => {
			navigate(-1);
		}, 1000);
	};


	const handleHazardInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		handleChange({ name, value });
	};

	const onAddImage = (e) => {
		e.preventDefault()
		imageInputRef.current.click();
	};

	const confirmImage = (e) => {
		e.preventDefault();
		uploadImage(image);
		setImageAdded(true);
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate(-1);
	};



	useEffect(() => {
		// console.log(
		// 	'useEffect imageinputref.current.files',
		// 	imageInputRef.current.files
		// );
		if (imageInputRef.current.files.length > 0) {
			confirmImageRef.current.style = { display: 'block' };
			// imageInputRef.current.style = { display: 'none' };
		}
	}, [image]);

	return (
		<StyledAddHazard>
			<AddHazardForm>
				<h1>{isEditing ? 'Edit Hazard' : 'Create Hazard'}</h1>
				{showAlert && <Alert />}	
					<Places
						name="hazardAddress"
						placeholder={hazardAddress}
						label="Hazard Address"
						// type="text"
						// handleChange={handleHazardInput}
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
					{/* <h4>Image</h4> */}
					<div
						style={{
							textAlign: 'left',
							width: '100%',
							padding: '1rem',
						}}
					>
						<h6>Attach Image</h6>
						<p>
							{image ? imageInputRef.current.files[0].name : null}
						</p>
					</div>
					<ButtonContainer jc="end" gap="0.5rem">
						<input
							ref={imageInputRef}
							style={{ display: 'none' }}
							type="file"
							onChange={(e) => setImage(e.target.files[0])}
						/>

						{!imageAdded && (
							<>
								<Button
									ref={addImageRef}
									type="button"
									height="35px"
									width="60px"
									onClick={onAddImage}
									disabled={isLoading}
								>
									{!image ? 'Add Image' : 'change'}
								</Button>

								<Button
									ref={confirmImageRef}
									height="35px"
									width="60px"
									style={{ display: 'none' }}
									onClick={confirmImage}
									disabled={isLoading}
								>
									Confirm
								</Button>
							</>
						)}
					</ButtonContainer>
				</AddImageContainer>

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
			<Footer/>
		</StyledAddHazard>
	);
};

export default AddHazard;

/* <Icon
							className="icon"
							icon="bxs:folder-plus"
							height="45"
							onClick={onAddImage}
						/> */
