import styled from 'styled-components';

const StyledHeader = styled.header`
	position: relative;
	top: 0;
	height: 10vh;
	min-height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1rem;
	font-weight: 500;
	background-color: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.textLight};
	/* box-shadow: ${({ theme }) => theme.boxShadow}; */

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	div h1 {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.highlight};
		font-weight: 600;
	}

	div h4 {
		font-weight: 500;
	}
`;
export default StyledHeader;
