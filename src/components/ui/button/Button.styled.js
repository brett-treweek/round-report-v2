import styled from 'styled-components';

export const Button = styled.button`
	height: ${({ height }) => height || '50px'};
	width: ${({ width }) => width || '70px'};
	/* padding: 1rem; */
	border: solid 3px #005e87;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
		5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;
	color: ${({ theme }) => theme.textLight};
	font-weight: 400;
	font-size: 1rem;
	transition: all 100ms ease;

	&:hover {
		cursor: pointer;
	}
`;
