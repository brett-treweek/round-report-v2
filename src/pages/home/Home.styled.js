import styled from 'styled-components';

const StyledHome = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	min-height: 80vh;
	height: 100%;
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.main};
`;

export default StyledHome;
