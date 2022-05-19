import styled from 'styled-components';


const StyledMap = styled.div`
	padding: 0 1rem;
	height: 37vh;
	width: 100%;
	background-color: ${({ theme }) => theme.background};
	z-index: 10;

	img {
		width: 100%;
		max-width: 500px;
		height: 100%;
		box-shadow: ${({ theme }) => theme.boxShadow};
	}
`;

export default StyledMap;