import React from 'react'
import { useNavigate } from 'react-router-dom';
import StyledRoundSearch, { GoButton, SearchForm, SearchInput, SearchLabel } from './RoundSearch.styled'

const RoundSearch = () => {
	let navigate = useNavigate()

  return (
		<StyledRoundSearch>
            <SearchForm action="#">
				<SearchLabel>Enter round number</SearchLabel>
			<SearchInput
				type="number"
				min="1"
				max="10"
				autoFocus
			></SearchInput>
            <GoButton onClick={(e) => {e.preventDefault()
				navigate('/round')}}>
                Go
            </GoButton>

            </SearchForm>
		</StyledRoundSearch>
  );
}

export default RoundSearch