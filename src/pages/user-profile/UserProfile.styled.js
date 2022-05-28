import styled from 'styled-components';

const StyledUserProfile = styled.section`
	position: relative;
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding: 1rem;
	min-height: 80vh;
	width: 100%;
	background-color: ${({ theme }) => theme.background};

	.title{
		font-weight: 600;
	}
`;

export default StyledUserProfile;
