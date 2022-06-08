import styled from 'styled-components';

const StyledRound = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 100vh;
	/* text-align: center; */
	background-color: ${({ theme }) => theme.background};
`;

export default StyledRound;