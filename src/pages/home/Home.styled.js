import styled from 'styled-components';

const StyledHome = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	min-height: 80vh;
	width: 100vw;
	text-align: center;
	background-color: ${({ theme }) => theme.background};
`;

export default StyledHome;
