import styled from 'styled-components';

const StyledCancelButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 30px;
	padding: 10px;
	border: 2px solid #005e87;
	border-radius: 50%;
	background: ${({ theme }) => theme.highlight};
	box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
		5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;
	color: ${({ theme }) => theme.textLight};
	font-weight: 800;
	cursor: pointer;
`;

export default StyledCancelButton;
