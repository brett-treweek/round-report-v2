import styled from 'styled-components';

const StyledRound = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 100vh;
	height: 100%;
	width: 100%;
	background-color: ${({ theme }) => theme.background};

	.footer-div {
		position: sticky;
		bottom: 0px;
		width: 100%;
	}
`;

export default StyledRound;