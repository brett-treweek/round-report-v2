import styled from 'styled-components';

const StyledRoundSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	padding: 0.5rem;
	background-color: black;
	/* color: ${({ theme }) => theme.highlight}; */
	@media (max-height: 730px) {
		padding: 1rem;
	}
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* gap: 1rem; */
	width: 100%;
	max-width: 500px;
	/* height: 5rem; */
	/* border: 1px solid ${({ theme }) => theme.background}; */
	padding: 0.2rem 1rem;
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
	width: 170px;
	height: 50px;
	/* margin: 0 1rem; */
	padding: 0.2rem 2rem;
	font-size: 1rem;
	font-weight: 500;
	text-align: start;
	color: ${({ theme }) => theme.text};
	border: none;
	background-color: ${({ theme }) => theme.background};
	/* box-shadow: ${({ theme }) => theme.boxShadowCard}; */
	/* border: 3px solid ${({ theme }) => theme.background}; */
	/* border-radius: 10px; */

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
	color: ${({ theme }) => theme.highlight};
	font-size: 1rem;
	font-weight: 700;
`;

export const GoButton = styled.button`
	position: absolute;
	top: 5px;
	right: 10px;
	height: 40px;
	width: 50px;
	border: solid 2px ${({ theme }) => theme.highlight};
	background-color: ${({ theme }) => theme.highlight};
	border-radius: 13px;
	box-shadow: ${({ theme }) => theme.boxShadowButton};
	color: ${({ theme }) => theme.light};
	font-weight: 500;
	font-size: 0.7rem;
	cursor: pointer;
`;

export default StyledRoundSearch;
