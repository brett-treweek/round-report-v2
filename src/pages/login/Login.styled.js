import styled from 'styled-components';

export const StyledLogin = styled.section`
	display: flex;
	flex-direction: column;
    align-items: center;
	padding-top: 5rem;
    justify-content: space-between;
	min-height: 100vh;
	width: 100%;
	background-color: ${({ theme }) => theme.background};
`;

export const LoginForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	gap: 1rem;
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

	.switch {
		border: none;
		color: ${({ theme }) => theme.highlight};
		background-color: transparent;
		font-weight: 500;
		font-size: 1rem;
		cursor: pointer;
	}
`;


