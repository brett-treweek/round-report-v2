import styled from 'styled-components';

const StyledHazardCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 1rem;
	margin-top: 1.5rem;
	min-height: 30vh;
	width: 90vw;
	max-width: 500px;
	border: 5px solid ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	border-radius: 16px;

	h2 {
		font-size: 1.3rem;
		font-weight: 600;
	}

	h4 {
		font-size: 1rem;
		font-weight: 600;
	}

	h4,
	h2 {
		line-height: 1.5;
	}

	p {
		font-size: 0.8rem;
		font-weight: 500;
	}

	& > img {
		height: 220px;
		width: 100%;
		margin: 1rem 0;
	}
`;

export const HazardCardButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    /* gap: 1rem; */

     img {
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
`

export default StyledHazardCard;
