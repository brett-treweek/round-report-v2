import styled from 'styled-components';

export const Button = styled.button`
	height: ${({ height }) => height || '39px'};
	width: ${({ width }) => width || '65px'};
	padding: 5px;
	border: solid 2px ${({ theme }) => theme.highlight};
	border-radius: ${({ br }) => br || '16px'};
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadowButton};
	color: ${({ theme }) => theme.light};
	font-weight: 500;
	font-size: 10px;
	cursor: pointer;
`;
export const ButtonContainer = styled.div`
	height: ${({ height }) => height || '100%'};
	width: ${({ width }) => width || '100%'};
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: ${({ jc }) => jc || 'start'};
	gap: ${({ gap }) => gap || '1rem'};
	border: none;
	background-color: transparent;
`;

