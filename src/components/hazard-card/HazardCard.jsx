import React from 'react'
import StyledHazardCard, { HazardCardButtonsContainer } from './HazardCard.styled';
import dog from '../../assets/images/hazardImage.png';
import { remove, pin, print, edit } from '../../assets/icons/index';
import moment from 'moment';

const HazardCard = ({hazardRound, hazardType, hazardAddress, message, createdAt, img, alt, createdByUsername}) => {

  const date = moment(createdAt).format('Do MMM, YYYY');
  

  return (
		<StyledHazardCard>
			<p>Round {hazardRound}</p>
			<h3>{hazardType}</h3>
			<h4>{hazardAddress}</h4>
      <p>"{message}"</p>
			<p>Created by: {createdByUsername}</p>
			<p>{date}</p>
			<img src={img || dog} alt={alt || 'hazard image'} />
			<HazardCardButtonsContainer>
				<img src={pin} alt="map pin" />
				<img src={print} alt="print" />
				<img src={edit} alt="edit" />
				<img src={remove} alt="remove" />
			</HazardCardButtonsContainer>
		</StyledHazardCard>
  );
}

export default HazardCard