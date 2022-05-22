import styled from 'styled-components';

export const Button = styled.button`
	height: ${({ height }) => height || '50px'};
	width: ${({ width }) => width || '70px'};
	/* padding: 1rem; */
	border: none;
	border-radius: 5px;
	background-color: ${({ bc }) => bc || 'red'};
	box-shadow: ${({ theme }) => theme.boxShadow};
	color: ${({ theme }) => theme.textLight};
	font-weight: 500;
	font-size: 1.1rem;
	transition: all 100ms ease;

	&:hover {
		cursor: pointer;
	}
`;
