import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: sticky;
	bottom: 0vh;
	height: 10vh;
	min-height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 2rem;
	background-color: transparent;

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
		/* position: relative; */
		height: 60px;
		width: 60px;
		padding: 17px;
		background-color: ${({ theme }) => theme.highlight};
		border-radius: 50%;
		color: ${({ theme }) => theme.light};
		transition: all 300ms ease;
		border: solid 3px ${({ theme }) => theme.highlight};
		box-shadow: ${({ theme }) => theme.boxShadowButton};
		cursor: pointer;
	}

	.logoutBtn {
		font-size: 12px;
	}
`;

export const HazardButton = styled.button`
	/* position: absolute; */
	display: flex;
	align-items: center;
	justify-content: center;
	/* top: 0;
	left: 50%;
	transform: translateX(-50%) translateY(-50%); */
	height: 60px;
	width: 60px;
	border-radius: 100%;
	border: solid 3px ${({ theme }) => theme.highlight};
	/* padding: 0.6rem; */
	font-size: 0.6rem;
	font-weight: 500;
	color: ${({ theme }) => theme.light};
	background-color: ${({ theme }) => theme.highlight};
	box-shadow: ${({ theme }) => theme.boxShadowButton};
	cursor: pointer;
	transition: all 300ms linear;

	/* &::after {
		content: 'Add Hazard';
		color: ${({ theme }) => theme.text};
		position: absolute;
		width: fit-content;
		font-size: 0.7rem;
		font-weight: 700;
		bottom: -25px;
	} */

	@media (max-height: 730px) {
		height: 5rem;
		width: 5rem;
		padding: 0;
	}
`;

export default StyledFooter;
