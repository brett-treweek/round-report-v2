import styled from 'styled-components';

const StyledDetails = styled.div`
	position: ${({ position }) => 'sticky' || 'static'};
	top: ${({ top }) => '10vh'};
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 25vh;
	width: 100%;
	padding: 1rem 1rem 3rem;
	background: linear-gradient(${({theme}) => theme.main}, transparent);
`;

export const DetailsCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 1rem 2rem;
	gap: 3rem;
	height: 100%;
	width: 100%;
	max-width: 500px;
	border-radius: 15px;
	border-bottom-right-radius: 50%;
	color: ${({ theme }) => theme.textLight};
	opacity: 0.8;
	background: linear-gradient(145deg, #181832, #1d1d3b);
	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	backdrop-filter: blur(2px);
	border: 3px solid #1b1b37;

	div {
		text-align: left;
		line-height: 1.4;
	}

	h2 {
		font-size: 1rem;
		font-weight: 600;
	}

	p {
		font-size: 0.8rem;
	}

	.icon {
		padding: 10px;
		height: 50px;
		width: 70px;
		color: ${({ theme }) => theme.textLight};
		border-radius: 16px;
		background: ${({ theme }) => theme.highlight};
		box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
			5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;
		border: solid 3px #005e87;
		transition: all 300ms ease;
	}

	.icon:hover {
		cursor: pointer;
	}
`;

	export const IconContainer = styled.div`
		display: flex;
		flex-direction: column;
		gap: 1rem;
	`;

export default StyledDetails;
