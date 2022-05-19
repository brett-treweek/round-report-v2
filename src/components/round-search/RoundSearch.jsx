import React from 'react'
import StyledRoundSearch, { GoButton, SearchForm, SearchInput } from './RoundSearch.styled'

const RoundSearch = () => {
  return (
		<StyledRoundSearch>
            <SearchForm action="#">
			<SearchInput
				type="number"
				min="1"
				max="10"
				placeholder="Enter round number"
			></SearchInput>
            <GoButton>
                Go
            </GoButton>

            </SearchForm>
		</StyledRoundSearch>
  );
}

export default RoundSearch