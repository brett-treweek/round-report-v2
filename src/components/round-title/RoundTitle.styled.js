import styled from 'styled-components';

const StyledRoundTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 2rem 1rem 1rem;
	background-color: ${({ theme }) => theme.backgrond};
	color: ${({ theme }) => theme.textLight};

	@media (max-height: 730px) {
		padding: 1rem;
	}
`;

export const RoundTitleInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 500px;
	height: 4rem;
	border: none;
	border-radius: 10px;
	padding: 1rem;
	font-size: larger;
	background-color: ${({ theme }) => theme.main};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
    gap: 2rem;
    width: 50%;
`;

export default StyledRoundTitle;
