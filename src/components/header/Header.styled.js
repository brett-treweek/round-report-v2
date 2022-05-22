import styled from 'styled-components';

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	height: 10vh;
	min-height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	background-color: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.textLight};
	z-index: 1000;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		/* left: 50%;
		transform: translateX(-50%); */
	}

	div h1 {
		font-size: 1.1rem;
		/* color: ${({ theme }) => theme.main}; */
		font-weight: 600;
		line-height: 1.6;
	}

	div h4 {
		font-weight: 400;
		font-size: 0.9rem;
	}

	img {
		width: 3.5rem;
	}
`;
export default StyledHeader;
