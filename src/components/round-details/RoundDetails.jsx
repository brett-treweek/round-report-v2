import React from 'react'
import StyledDetails, { DetailsCard } from './RoundDetails.styled';
import { Icon } from '@iconify/react';


const RoundDetails = () => {
  return (
		<StyledDetails>
			<DetailsCard>
				<Icon icon="fa-solid:phone-alt" color="#DC1928" height="50" />
				<div>
					<h2>Palmyra DC</h2>
					<p>8 Absolon St. Palmyra 6157</p>
					<p>Contact: John Smith</p>
					<p>Ph: 9300600</p>
					<p>wcc: 135780</p>
				</div>
			</DetailsCard>
		</StyledDetails>
  );
}

export default RoundDetails