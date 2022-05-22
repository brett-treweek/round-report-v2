import React from 'react'
import StyledDetails, { DetailsCard } from './RoundDetails.styled';
import { Icon } from '@iconify/react';
import {Button} from '../../components/ui/button/Button.styled';
import { edit } from '../../assets/icons/index';



const RoundDetails = ({roundDeets, changeView, view}) => {
	

  return (
		<StyledDetails>
			<DetailsCard>
				{roundDeets ? (
					<Button onClick={changeView}>{view}</Button>
				) : (
					<Icon
						icon="fa-solid:phone-alt"
						color="#DC1928"
						height="40"
					/>
				)}
				<div>
					{roundDeets ? (
						<h2>{roundDeets.round}</h2>
					) : (
						<h2>Palmyra DC</h2>
					)}
					{roundDeets ? (
						<p>{roundDeets.start}</p>
					) : (
						<p>8 Absolon St. Palmyra 6157</p>
					)}
					{roundDeets ? (
						<p>{roundDeets.relay}</p>
					) : (
						<p>Contact: John Smith</p>
					)}
					{roundDeets ? <p>{roundDeets.lpo}</p> : <p>Ph: 9300600</p>}
					<p>wcc: 135780</p>
				</div>
				{roundDeets ? (
					<Icon className='icon' icon="ci:edit" color="#fff" height="50" />
				) : null}
			</DetailsCard>
		</StyledDetails>
  );
}

export default RoundDetails;