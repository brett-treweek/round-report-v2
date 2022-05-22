import styled from 'styled-components';

const StyledRoundSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 2rem 1rem 1rem;
	background-color: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.textLight};

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
	border: 3px solid #1b1b37;
	padding: 1rem;
	font-size: larger;
	border-radius: 16px;
	background: ${({ theme }) => theme.main};
	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
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
	color: ${({ theme }) => theme.textDark};
	background-color: ${({ theme }) => theme.background};
	box-shadow: 6px 6px 19px #0b0b16, -6px -6px 19px #2b2b58;
	border: 3px solid #1b1b37;
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
	border: solid 3px #005e87;
	background-color: ${({ theme }) => theme.highlight};
	border-radius: 13px;
	box-shadow: inset 5px 5px 10px #002d41, inset -5px -5px 10px #008fcd,
		5px 5px 16px #0b0b16, -5px -5px 16px #2b2b58;
	color: ${({ theme }) => theme.textLight};
	font-weight: 500;
	font-size: 1rem;
	cursor: pointer;
`;

export default StyledRoundSearch;
