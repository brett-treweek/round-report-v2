import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/ui/alert/Alert';
import { useAppContext } from '../../context/appContext';
import Input from '../ui/input/input';
import { Button } from '../ui/button/Button.styled';
import StyledEditProfile, { ProfileForm } from './EditProfile.styled';
import CancelButton from '../ui/cancel-button/CancelButton';

const EditProfile = (props) => {
	console.log('edit-profile component rendered');
	const navigate = useNavigate();
	const navigateHome = () => {
		setTimeout(() => {
			navigate('/');
		}, 1000);
	};

	const { user, showAlert, displayAlert, updateUser, isLoading } =
		useAppContext();

	const [name, setName] = useState(user?.name);
	const [lastName, setLastName] = useState(user?.lastName);
	const [email, setEmail] = useState(user?.email);
	const [round, setRound] = useState(user?.round);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !lastName || !round) {
			displayAlert();
			return;
		}
		updateUser({ name, email, lastName, round });
		navigateHome();
	};

	// function to handle cancel btn.
	const handleCancel = (e) => {
		e.preventDefault();
		props.setProfileToggle(false);
	};

	return (
		<StyledEditProfile>
			<ProfileForm onSubmit={handleSubmit}>
				<CancelButton onClick={handleCancel} />
				<h3>Edit Profile</h3>
				{showAlert && <Alert />}
				<Input
					type="text"
					name="name"
					value={name}
					handleChange={(e) => setName(e.target.value)}
					autoComplete="name"
				/>
				<Input
					type="text"
					name="lastName"
					label="last name"
					value={lastName || ''}
					handleChange={(e) => setLastName(e.target.value)}
					autoComplete="last-name"
				/>
				<Input
					type="email"
					name="email"
					value={email}
					handleChange={(e) => setEmail(e.target.value)}
					autoComplete="email"
				/>
				<Input
					type="round"
					name="round"
					value={round || ''}
					handleChange={(e) => setRound(e.target.value)}
					autoComplete="email"
				/>
				<Button width="100%" type="submit" disabled={isLoading}>
					{isLoading ? 'Please wait...' : 'Save Changes'}
				</Button>
			</ProfileForm>
		</StyledEditProfile>
	);
};

export default EditProfile;
