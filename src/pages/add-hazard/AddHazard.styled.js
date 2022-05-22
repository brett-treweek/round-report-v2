import styled from 'styled-components';

const StyledAddHazard = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	min-height: 80vh;
	background-color: ${({ theme }) => theme.main};
`;

export const AddHazardForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 1rem;
	width: 80vw;
	max-width: 500px;
	background: linear-gradient(145deg, #181832, #1d1d3b);
	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	border-radius: 15px;

	h1 {
		color: ${({ theme }) => theme.textLight};
		font-weight: 500;
		font-size: 1.2rem;
	}
`;

export const AddImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	& > h2 {
		color: ${({ theme }) => theme.textLight};
		font-size: 1rem;
		font-weight: 500;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 2rem;

	& > .icon {
		padding: 5px;
		border: 2px solid #005e87;
		color: ${({ theme }) => theme.textLight};
		border-radius: 16px;
		background: ${({ theme }) => theme.highlight};
		box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
			5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;
		cursor: pointer;
	}
`;

export default StyledAddHazard;
