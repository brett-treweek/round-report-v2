import styled from 'styled-components';

const StyledHazardCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    padding: 1rem 0;
    margin-bottom: 1rem;
	min-height: 37vh;
	width: 90vw;
	max-width: 500px;
	background-color: ${({ theme }) => theme.background};
	box-shadow: ${({ theme }) => theme.boxShadow};

    h4, h2 {
        font-weight: 600;
        line-height: 1.5;
    }

    p {
        font-size: 1rem;
    }


 
     & > img {
        min-height: 250px;
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
        color: red;
        border-radius: 5px;
        cursor: pointer;
    }
`

export default StyledHazardCard;
