import React, { useState } from 'react';
import Alert from '../../components/ui/alert/Alert';
import { useAppContext } from '../../context/appContext';
import Input from '../ui/input/input';
import { Button } from '../ui/button/Button.styled';
import StyledEditProfile, { ProfileForm } from './EditProfile.styled';
import CancelButton from '../ui/cancel-button/CancelButton';
import { useNavigate } from 'react-router-dom';

const EditProfile = (props) => {
	const { user, showAlert, displayAlert, updateUser, isLoading } =
		useAppContext();
	const navigate = useNavigate();

	const [name, setName] = useState(user?.name);
	const [lastName, setLastName] = useState(user?.lastname);
	const [email, setEmail] = useState(user?.email);
	const [round, setRound] = useState(user?.round);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !lastName || !round) {
			displayAlert()
			return
		}
		updateUser({name, email, lastName, round})
	};

	// function to handle cancel btn.
	const handleCancel = (e) => {
		e.preventDefault();
		props.setProfileToggle(false)
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
