import styled from 'styled-components';


const StyledDetails = styled.div`
	position: ${({ position }) => 'sticky' || 'static'};
	top: ${({ top }) => '10vh'};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20vh;
	width: 100%;
	padding: 0.8rem;
	background: linear-gradient(${({ theme }) => theme.background}, transparent);
	z-index: 0;
`;

export const DetailsCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ jc }) => jc || 'space-evenly'};
	padding: 1rem 2rem;
	gap: 3rem;
	height: 100%;
	width: 100%;
	max-width: 500px;
	border-radius: 15px;
	border-bottom-right-radius: 50%;
	color: ${({ theme }) => theme.textLight};
	background-color: ${({ theme }) => theme.main};
	box-shadow: ${({ theme }) => theme.boxShadow};

	div {
		text-align: left;
		line-height: 1.4;
	}

	h2 {
		font-size: 1rem;
	}

	p {
		font-size: 0.8rem;
	}

	.icon {
		padding: 10px;
		height: 70px;
		width: 70px;
		color: red;
		border-radius: 15px;
		transition: all 300ms ease;
	}

	.icon:hover {
		cursor: pointer;
		box-shadow: ${({ theme }) => theme.boxShadow};
	}
`;

export default StyledDetails;
