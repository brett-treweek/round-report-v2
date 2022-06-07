import styled from 'styled-components';

const StyledRoundSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};

	@media (max-height: 730px) {
		padding: 1rem;
	}
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;
	max-width: 500px;
	height: 5rem;
	/* border: 3px solid ${({ theme }) => theme.background}; */
	padding: 1rem;
	font-size: larger;
	border-radius: 16px;
	z-index: 100;
	background: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	transition: all 300ms ease;

	&:focus {
		outline: none;
	}
`;

export const SearchInput = styled.input`
	width: 90px;
	height: 90%;
	margin: 0 1rem;
	padding: 0.5rem;
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.background};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	border: 3px solid ${({ theme }) => theme.background};
	border-radius: 10px;

	&:focus {
		outline: none;
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const SearchLabel = styled.label`
	color: ${({ theme }) => theme.textLight};
	font-size: 0.8rem;
	font-weight: 500;
`;

export const GoButton = styled.button`
	height: 100%;
	width: 80px;
	border: solid 3px ${({ theme }) => theme.highlight};
	background-color: ${({ theme }) => theme.highlight};
	border-radius: 13px;
	box-shadow: ${({ theme }) => theme.boxShadowButton};
	color: ${({ theme }) => theme.light};
	font-weight: 500;
	font-size: 1rem;
	cursor: pointer;
`;

export default StyledRoundSearch;
