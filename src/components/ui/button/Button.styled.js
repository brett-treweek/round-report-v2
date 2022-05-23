import styled from 'styled-components';

export const Button = styled.button`
	height: ${({ height }) => height || '50px'};
	width: ${({ width }) => width || '70px'};
	padding: 5px;
	border: solid 3px ${({ theme }) => theme.highlight};
	border-radius: 16px;
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadowButton};
	color: ${({ theme }) => theme.light};
	font-weight: 500;
	font-size: 13px;
	cursor: pointer;
`