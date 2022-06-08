import styled from 'styled-components';

const StyledHome = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	min-height: 100vh;
	width: 100%;

	.details-footer{
		position: sticky;
		bottom: 0px;
		width: 100%;
	}
`;

export default StyledHome;
