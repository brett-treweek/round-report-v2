import styled from 'styled-components';

const StyledHazardCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
	margin-bottom: 2rem;
	min-height: 30vh;
	width: 90vw;
	max-width: 500px;
	border: 10px solid #1b1b37;
	color: ${({ theme }) => theme.textDark};
	background-color: ${({ theme }) => theme.background};

	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	border-radius: 16px;

	h2 {
		font-size: 1.3rem;
		font-weight: 700;
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
		font-size: 0.7rem;
	}

	& > img {
		height: 220px;
		width: 100%;
		margin: 1rem;
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
