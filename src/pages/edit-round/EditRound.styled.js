import styled from 'styled-components';

const StyledEditRound = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	min-height: 80vh;
	background-color: ${({ theme }) => theme.background};
`;

export const EditRoundForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3rem 2rem;
	gap: 1rem;
	width: 80vw;
	max-width: 500px;
	background: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	border-radius: 15px;

	h1 {
		color: ${({ theme }) => theme.text};
		font-weight: 500;
		font-size: 1.5rem;
	}
`;

export default StyledEditRound;
