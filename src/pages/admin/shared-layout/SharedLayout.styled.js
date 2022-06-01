import styled from 'styled-components';

const StyledSharedLayout = styled.section`
	height: 100%;
	width: 100%;
	background-color: aliceblue;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	nav >*{
		margin: 2rem;
	}
`;

export default StyledSharedLayout;
