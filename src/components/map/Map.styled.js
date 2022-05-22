import styled from 'styled-components';


const StyledMap = styled.div`
	padding: 0 1rem;
	height: 37vh;
	width: 100%;
	background-color: ${({ theme }) => theme.main};
	z-index: 10;

	img {
		width: 100%;
		max-width: 500px;
		height: 100%;
		border-radius: 16px;
		border: 10px solid #1b1b37;
		background: linear-gradient(145deg, #1d1d3b, #181832);
		box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	}
`;

export default StyledMap;