import React, { useState } from 'react';
import Alert from '../../components/ui/alert/Alert';
import { useAppContext } from '../../context/appContext';
import Input from '../ui/input/input';
import { Button } from '../ui/button/Button.styled';
import StyledEditProfile, { ProfileForm } from './EditProfile.styled';

const EditProfile = () => {
	const { user, showAlert, displayAlert, updateUser, isLoading } =
		useAppContext();

	const [name, setName] = useState(user?.name);
	const [lastName, setLastName] = useState(user?.lastName);
	const [email, setEmail] = useState(user?.email);
	const [round, setRound] = useState(user?.round);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('update user');
	};

	return (
		<StyledEditProfile>
			<ProfileForm onSubmit={handleSubmit}>
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
