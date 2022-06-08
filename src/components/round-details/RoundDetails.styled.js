import styled from 'styled-components';

const StyledDetails = styled.div`
	position: ${({ position }) => 'sticky' || 'static'};
	top: ${({ top }) => '0vh'};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	/* min-height: 100%; */
	/* height: 100%; */
	width: 100%;
	padding: 1rem;
	/* background: linear-gradient(${({ theme }) =>
		theme.background}, transparent); */
`;

export const DetailsCard = styled.div`
	/* position: ${({ position }) => 'sticky' || 'static'}; */
	/* top: ${({ top }) => '11vh'}; */
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 1rem 2rem;
	gap: 1rem;
	height: 100%;
	width: 100%;
	max-width: 500px;
	border-radius: 15px;
	border-bottom-right-radius: 50%;
	color: ${({ theme }) => theme.text};
	opacity: 0.97;
	background: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	backdrop-filter: blur(2px);
	
	/* border: 3px solid ${({ theme }) => theme.background}; */

	div {
		text-align: left;
		line-height: 1.4;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 500;
	}

	h5 {
		font-size: 12px;
		font-weight: 600;
	}

	p {
		font-size: 12px;
		font-weight: 500;
	}

	.icon {
		padding: 10px;
		height: 50px;
		width: 70px;
		color: ${({ theme }) => theme.light};
		border-radius: 16px;
		background: ${({ theme }) => theme.highlight};
		box-shadow: ${({ theme }) => theme.boxShadowButton};
		border: solid 3px ${({ theme }) => theme.highlight};
		/* transition: all 300ms ease; */
	}

	.icon:hover {
		cursor: pointer;
	}
`;

export const Inline = styled.div`
	display: flex;
	gap: 5px;
`;
export const InnerContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: start;
	justify-content: space-between;
`;

export const IconContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: start;
	justify-content: start;
	gap: 1rem;

	.admin {
		/* background-color: yellow;
		color: black; */
	}
`;

export default StyledDetails;
