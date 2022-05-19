import styled from 'styled-components';

const StyledHome = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	height: 80vh;
	width: 100vw;
	text-align: center;
	background-color: ${({ theme }) => theme.background};
	z-index: -100;
`;

export default StyledHome;
