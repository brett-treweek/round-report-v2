import styled from 'styled-components';

export const StyledLogin = styled.section`
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
	min-height: 80vh;
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.background};
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
    gap: 1rem;
`;


