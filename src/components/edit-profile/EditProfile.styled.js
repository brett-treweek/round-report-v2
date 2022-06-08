import styled from 'styled-components';

const StyledEditProfile = styled.div`
	height: 100%;
	width: 100%;
	/* min-height: 100vh; */
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProfileForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 0.7rem;
	height: 100%;
	width: 90vw;
	max-width: 500px;
	background: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	border-radius: 16px;

	h1 {
		color: ${({ theme }) => theme.text};
		font-weight: 500;
	}

	p {
		font-weight: 500;
	}
`;

export default StyledEditProfile;
