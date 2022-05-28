import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledUserProfile from './UserProfile.styled';
import { Button, ButtonContainer } from '../../components/ui/button/Button.styled';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/edit-profile/EditProfile';
import HazardCard from '../../components/hazard-card/HazardCard';
import { DetailsCard } from '../../components/round-details/RoundDetails.styled';

const UserProfile = () => {
	const { user, showAlert, updateUser, isLoading, logoutUser } =
		useAppContext();

	const navigate = useNavigate();
	const [profileToggle, setProfileToggle] = useState(false);

	const capitilize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	
	

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
			<DetailsCard position top>
				<h2 className="title">{capitilize(user.name)}{user.lastname && ' '+capitilize(user.lastname)}{'\'s'}  Profile</h2>
				<ButtonContainer>
					<Button onClick={() => setProfileToggle(!profileToggle)}>
						{profileToggle ? 'Hazards' : 'Edit Profile'}
					</Button>
					<Button
						onClick={() => {
							logoutUser(user);
							navigate('/');
						}}
					>
						Logout
					</Button>
				</ButtonContainer>
			</DetailsCard>
			{profileToggle ? (
				<EditProfile setProfileToggle={setProfileToggle} />
			) : (
				<>
					<h2 className="title">Your Hazards</h2>
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
