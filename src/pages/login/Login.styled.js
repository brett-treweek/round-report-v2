import styled from 'styled-components';

export const StyledLogin = styled.section`
	display: flex;
    align-items: center;
    justify-content: center;
	min-height: 80vh;
	width: 100%;
	background-color: ${({ theme }) => theme.background};
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 2rem;
	height: 40vh;
	width: 80vw;
	max-width: 500px;
	background-color: ${({ theme }) => theme.main};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 15px;

	h1 {
		color: ${({ theme }) => theme.textLight};
		font-weight: 500;
	}
`;


