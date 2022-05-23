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
	border: 2px solid ${({ theme }) => theme.highlight};
	border-radius: 50%;
	background: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadowButton};
	color: ${({ theme }) => theme.light};
	font-weight: 800;
	cursor: pointer;
`;

export default StyledCancelButton;
