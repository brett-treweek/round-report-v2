import styled from 'styled-components';

const StyledCancelButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	width: 25px;
	padding: 0.7rem;
	border: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadow};
	color: ${({ theme }) => theme.textLight};
	font-weight: 800;
`;

export default StyledCancelButton;
