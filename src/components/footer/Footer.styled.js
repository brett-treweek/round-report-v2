import styled from "styled-components";

const StyledFooter = styled.footer`
	position: sticky;
	bottom: 0;
	height: 10vh;
	min-height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 3rem;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.textLight};
	font-weight: 500;
	box-shadow: ${({ theme }) => theme.boxShadow};

	.footer-inner-container {
		position: relative;
		height: 100%;
		width: 100%;
		max-width: 570px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.icon {
		height: 40px;
		width: 40px;
		color: ${({ theme }) => theme.main};
		transition: all 300ms ease;
		&:hover {
			color: red;
		}
	}
`;

export const HazardButton = styled.button`
	position: absolute;
	top: 10%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	height: 6.5rem;
	width: 6.5rem;
	border-radius: 100%;
	border: none;
	padding: 1rem;
	font-size: 1rem;
	font-weight: 600;
	color: ${({ theme }) => theme.textLight};
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadow};
	/* border: solid 5px ${({ theme }) => theme.highlight}; */
	cursor: pointer;
	transition: all 300ms linear;

	&:hover {
		color: yellow;
		letter-spacing: 0.1ch;
		/* background-color: ${({ theme }) => theme.main};
		color: ${({ theme }) => theme.highlight}; */
	}

	@media (max-height: 730px) {
		height: 5rem;
		width: 5rem;
		padding: 0;
	}
`;

export default StyledFooter;