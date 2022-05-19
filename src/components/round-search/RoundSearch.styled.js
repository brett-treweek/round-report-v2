import styled from 'styled-components';

const StyledRoundSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.textLight};
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 100%;
	max-width: 500px;
	height: 4rem;
	border: none;
	border-radius: 10px;
	padding: 0.7rem;
	font-size: larger;
	box-shadow: ${({ theme }) => theme.boxShadow};
	transition: all 300ms ease;

	&:focus {
		outline: none;
		transform: scale(1.03);
	}
`;

export const SearchInput = styled.input`
	width: 60%;
    height: 90%;
    margin: 0 1rem;
	background-color: ${({ theme }) => theme.background};
	border: none;
	transition: all 300ms ease;

	&:focus {
		outline: none;
	}
`;

export const GoButton = styled.button`
	height: 100%;
	width: 80px;
	border: none;
    border-radius: 5px;
	background-color: ${({ theme }) => theme.highlight};
	color: ${({ theme }) => theme.textLight};
    font-weight: 500;
    font-size: 1rem;
`;

export default StyledRoundSearch;
