import styled from 'styled-components';

const StyledHazardCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	/* padding: 0.5rem; */
	margin-top: 1.5rem;
	min-height: 30vh;
	width: 95vw;
	max-width: 500px;
	/* border: 5px solid ${({ theme }) => theme.background}; */
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.background};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	border-radius: 16px;

	.hazard-details {
		width: 100%;
		padding: 0.7rem;
	}

	.title-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.address-container {
		display: flex;
		width: 100%;
	}

	.image {
		height: 250px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	h3 {
		font-size: 1rem;
		font-weight: 700;
		margin-bottom: 0.2rem;
	}

	h4 {
		font-size: 0.8rem;
		font-weight: 600;
	}
	h5{
		font-size: 0.7rem;
	}

	h4,
	h2 {
		line-height: 1.2;
	}

	p {
		font-size: 0.8rem;
		font-weight: 500;
	}

	& > img {
		height: 180px;
		width: 100%;
		/* margin: 0.5rem 0; */
	}
`;

export const HazardCardButtonsContainer = styled.div`
    display: flex;
	padding: 0.5rem;
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
