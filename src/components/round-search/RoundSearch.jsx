import React from 'react'
import { useNavigate } from 'react-router-dom';
import StyledRoundSearch, { GoButton, SearchForm, SearchInput } from './RoundSearch.styled'

const RoundSearch = () => {
	let navigate = useNavigate()

  return (
		<StyledRoundSearch>
            <SearchForm action="#">
			<SearchInput
				type="number"
				min="1"
				max="10"
				placeholder="Round Number or Suburb"
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