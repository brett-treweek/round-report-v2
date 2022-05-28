import styled from 'styled-components';

const StyledUserProfile = styled.section`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	width: 100%;
	background-color: ${({ theme }) => theme.background};
`;

export default StyledUserProfile;
