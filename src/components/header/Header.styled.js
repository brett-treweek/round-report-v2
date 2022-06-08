import styled from 'styled-components';

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	padding: 0.5rem;
	/* height: 10vh; */
	/* min-height: 70px; */
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	font-weight: 500;
	background-color: ${({ theme }) => theme.background};
	/* color: ${({ theme }) => theme.text}; */
	z-index: 1000;

	div {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	div h1 {
		color: ${({ theme }) => theme.dark};
		font-size: 1rem;
		font-weight: 800;
	}

	div h4 {
		font-weight: 500;
		font-size: 0.7rem;
	}

	img {
		width: 3.5rem;
	}
`;
export default StyledHeader;
