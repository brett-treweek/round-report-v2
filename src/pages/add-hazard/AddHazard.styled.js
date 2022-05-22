import styled from 'styled-components';


const StyledAddHazard = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	background-color: ${({ theme }) => theme.background};
`;

export const AddHazardForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	gap: 2rem;
	max-height: 75vh;
	width: 80vw;
	max-width: 500px;
	background-color: ${({ theme }) => theme.main};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 15px;

	h1 {
		color: ${({ theme }) => theme.textLight};
		font-weight: 500;
		font-size: 2rem;
	}
`;

export const AddImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	
	& > h2 {
		color: ${({theme}) => theme.textLight};
		/* font-size: 1.5rem; */
		font-weight: 500;
		
	}
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 1rem;
`

export default StyledAddHazard;