import React from 'react'
import StyledHazardSearch from './HazardSearch.styled'

const HazardSearch = () => {
  // console.log('hazardSearch component rendered');
  return (
		<StyledHazardSearch>
			<h1>Filter</h1>
			<h5>type</h5>
			<h5>suburb</h5>
			<h5>user</h5>
			<h5>round</h5>
			<h5>date</h5>
			<h5>marked resolved</h5>
			<h5>deleted</h5>

		</StyledHazardSearch>
  );
}

export default HazardSearch