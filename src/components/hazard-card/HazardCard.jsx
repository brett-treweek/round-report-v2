import React from 'react'
import StyledHazardCard, { HazardCardButtonsContainer } from './HazardCard.styled';
import dog from '../../assets/images/hazardImage.png';
import { remove, pin, print, edit } from '../../assets/icons/index';

const HazardCard = ({hazard, index}) => {
  return (
    <StyledHazardCard>
        <h2>{index + 1}: {hazard.title}</h2>
        <h4>{hazard.address}</h4>
        <p>Recorded by {hazard.user} on {hazard.date}</p>
        <img src={hazard.img || dog} alt={hazard.alt || 'hazard image'} />
        <HazardCardButtonsContainer>
            <img src={pin} alt='map pin'/>
            <img src={print} alt='print'/>
            <img src={edit} alt='edit'/>
            <img src={remove} alt='remove'/>
        </HazardCardButtonsContainer>
    </StyledHazardCard>
  )
}

export default HazardCard