import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledUserProfile, { UserCard } from './UserProfile.styled';
import { Button, ButtonContainer } from '../../components/ui/button/Button.styled';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../components/edit-profile/EditProfile';
import HazardCard from '../../components/hazard-card/HazardCard';


// TODO set users hazards in state when logIn, display them here.
const UserProfile = () => {
	const { user, showAlert, updateUser, isLoading, logoutUser } =
		useAppContext();

	const navigate = useNavigate();
	const [profileToggle, setProfileToggle] = useState(false);

	const capitilize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}


	return (
		<StyledUserProfile>
			<UserCard position top>
				<h2 className="title">
					{capitilize(user.name)}
					{user.lastName && ' ' + capitilize(user.lastName)}
					{"'s"} Profile
				</h2>
				<p>Email: {user.email}</p>
				{user.round && <p> Round: {user.round} </p>}
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
			</UserCard>
			{profileToggle ? (
				<EditProfile setProfileToggle={setProfileToggle} />
			) : (
				<>
					<h2 className="title">Your Hazards</h2>
					{/* {hazards.map((hazard, index) => (
						<HazardCard
							key={hazard.id}
							hazard={hazard}
							index={index}
						/>
					))} */}
				</>
			)}
		</StyledUserProfile>
	);
};

export default UserProfile;
