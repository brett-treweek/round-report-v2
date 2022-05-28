import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledUserProfile from './UserProfile.styled';
import { Button } from '../../components/ui/button/Button.styled';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/edit-profile/EditProfile';
import HazardCard from '../../components/hazard-card/HazardCard';

const UserProfile = () => {
	const { user, showAlert, updateUser, isLoading, logoutUser } =
		useAppContext();

	const navigate = useNavigate();
	const [profileToggle, setProfileToggle] = useState(false);

	const hazards = [
		{
			title: 'Aggressive Dog',
			address: '5 Smith st Perth 6000',
			user: 'Brett Treweek',
			date: '01/06/2022',
			id: 1,
		},
		{
			title: 'Aggressive Cat',
			address: '10 Jones st Perth 6000',
			user: 'John Doe',
			date: '05/06/2022',
			id: 2,
		},
		{
			title: 'Aggressive Bird',
			address: '15 Central st Perth 6000',
			user: 'Jane Doe',
			date: '15/06/2022',
			id: 3,
		},
	];

	return (
		<StyledUserProfile>
			<h1>{user.name}'s Profile</h1>
			<div>
				<Button
					onClick={() => {
						logoutUser(user);
						navigate('/');
					}}
				>
					Logout
				</Button>
				<Button onClick={() => setProfileToggle(!profileToggle)}>
					{profileToggle ? 'Hazards' : 'Edit Profile'}
				</Button>
			</div>
			{profileToggle ? (
				<EditProfile />
			) : (
				<>
					<h2>Your Hazards</h2>
					{hazards.map((hazard, index) => (
						<HazardCard
							key={hazard.id}
							hazard={hazard}
							index={index}
						/>
					))}
				</>
			)}
		</StyledUserProfile>
	);
};

export default UserProfile;
