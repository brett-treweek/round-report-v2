import styled from 'styled-components';

const StyledEditRound = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	min-height: 80vh;
	background-color: ${({ theme }) => theme.main};
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
	background: linear-gradient(145deg, #181832, #1d1d3b);
	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	border-radius: 15px;

	h1 {
		color: ${({ theme }) => theme.textLight};
		font-weight: 500;
		font-size: 1.5rem;
	}
`;

export default StyledEditRound;
