import styled from 'styled-components';

const StyledHazardCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    /* gap: 1rem; */
	min-height: 37vh;
	width: 90vw;
	max-width: 500px;
	background-color: ${({ theme }) => theme.background};
	box-shadow: ${({ theme }) => theme.boxShadow};

    img {
        min-height: 200px;
    }
`;

export const HazardCardButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
        background-color: navy;
        color: white;
        padding: 10px;
        border-radius: 10px;
    }
`

export default StyledHazardCard;
