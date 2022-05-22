import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: sticky;
	bottom: 0;
	height: 10vh;
	min-height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 2rem;
	background-color: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.textLight};
	font-weight: 500;

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
		height: 60px;
		width: 60px;
		padding: 20px;
		background-color: ${({ theme }) => theme.highlight};
		border-radius: 50%;
		color: ${({ theme }) => theme.textLight};
		transition: all 300ms ease;
		border: solid 3px #005e87;
		box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
			5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;
	}
`;

export const HazardButton = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	height: 5rem;
	width: 5rem;
	border-radius: 100%;
	border: solid 3px #005e87;
	padding: 1rem;
	color: ${({ theme }) => theme.textLight};
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
		5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;

	cursor: pointer;
	transition: all 300ms linear;

	&::after {
		content: 'Add Hazard';
		position: absolute;
		width: fit-content;
		font-size: 0.7rem;
		font-weight: 600;
		bottom: -25px;
	}

	@media (max-height: 730px) {
		height: 5rem;
		width: 5rem;
		padding: 0;
	}
`;

export default StyledFooter;
