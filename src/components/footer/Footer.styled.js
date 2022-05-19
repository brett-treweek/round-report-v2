import styled from "styled-components";

const StyledFooter = styled.footer`
	position: relative;
	bottom: 0;
	height: 10vh;
	min-height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 3rem;
	background-color: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.textLight};
    font-weight: 500;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const HazardButton = styled.button`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	height: 6.5rem;
	width: 6.5rem;
	border-radius: 100%;
	border: none;
	padding: 1rem;
	font-size: 1rem;
	font-weight: 600;
	color: white;
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default StyledFooter;