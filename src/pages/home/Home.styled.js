import styled from 'styled-components';

const StyledHome = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	min-height: 80vh;
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.background};
`;

export default StyledHome;
