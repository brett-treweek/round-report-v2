import styled from 'styled-components'

const StyledAllHazards = styled.section`
    width: 100%;
    min-height: 100vh;
    text-align: center;
    padding: 2rem;
`

export const HazardsContainer = styled.div`
	width: 100%;
	height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InnerHazardsContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const InnerHazardsGrid = styled.div`
	width: 100%;
	height: 100%;
	background-color: transparent;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
    gap: 2rem;
    padding: 2rem;
`;



export default StyledAllHazards