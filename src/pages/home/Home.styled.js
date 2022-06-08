import styled from 'styled-components';

const StyledHome = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	/* padding: 0  0 2rem ; */
	height: 100%;
	min-height: 100vh;
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.background};

	.details-footer{
		width: 100%;
	}
`;

export default StyledHome;
