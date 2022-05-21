import styled from 'styled-components';

export const Button = styled.button`
	height: 50px;
	width: 70px;
	padding: 1rem;
	border: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.main};
	box-shadow: ${({ theme }) => theme.boxShadow};
	color: ${({ theme }) => theme.textLight};
	font-weight: 500;
	font-size: 1rem;
`;
