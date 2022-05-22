import styled from 'styled-components';

export const StyledLogin = styled.section`
	display: flex;
    align-items: center;
    justify-content: center;
	min-height: 80vh;
	width: 100%;
	background-color: ${({ theme }) => theme.main};
`;

export const LoginForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	gap: 1rem;
	/* max-height: auto; */
	width: 80vw;
	max-width: 500px;
	background: linear-gradient(145deg, #181832, #1d1d3b);
	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	border-radius: 16px;

	h1 {
		color: ${({ theme }) => theme.textLight};
		font-weight: 500;
	}
`;


