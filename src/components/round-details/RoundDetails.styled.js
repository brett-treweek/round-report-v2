import styled from 'styled-components';

const StyledDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20vh;
	width: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.background};
`;

export const DetailsCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(jc) => jc || 'center'};
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
`;

export default StyledDetails;
