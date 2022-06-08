import styled from 'styled-components';

const StyledAddHazard = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 5rem;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.background};
`;

export const AddHazardForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 1rem;
	gap: 0.5rem;
	width: 90vw;
	max-width: 500px;
	background: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	border-radius: 15px;

	h1 {
		color: ${({ theme }) => theme.text};
		font-weight: 700;
		font-size: 1.2rem;
	}

	@media(min-width: 1000px){
		gap: 1rem;
		padding: 3rem 2rem;
	}
`;

export const AddImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	& > h2 {
		color: ${({ theme }) => theme.text};
		font-size: 1rem;
		font-weight: 600;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 2rem;

	& > .icon {
		padding: 7px;
		border: 2px solid ${({ theme }) => theme.highlight};
		color: ${({ theme }) => theme.light};
		border-radius: 16px;
		background: ${({ theme }) => theme.highlight};
		box-shadow: ${({ theme }) => theme.boxShadowButton};
		cursor: pointer;
	}
`;

export default StyledAddHazard;
