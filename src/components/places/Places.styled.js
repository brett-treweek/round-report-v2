import styled from 'styled-components'

const StyledPlaces = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;
export const PlacesInput = styled.input`
	width: 100%;
	height: 40px;
	border-radius: 5px;
	border: none;
	padding: 1rem;

`;
export const PlacesLabel = styled.label`
	color: ${({ theme }) => theme.text};
	font-size: 0.8rem;
	font-weight: 500;
`;

export const PlacesList = styled.li`
	width: 100%;
	list-style: none;
	color: ${({ theme }) => theme.light};
	background-color: ${({ theme }) => theme.highlight};
	font-size: 0.8rem;
	font-weight: 500;
	padding: 10px;
	margin: 10px 0;
	cursor: pointer;
	/* border: 1px solid white; */
	/* border-radius: 5px; */
`;

export const PlacesUl = styled.ul`
    width: 100%;
    height: 100%;
	position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(70px);
	background-color: ${({ theme }) => theme.background};
	padding: 1rem;
	border-radius: 0 0 5px 5px;
`;


export default StyledPlaces