import React from 'react'
import StyledHazardCard, { HazardCardButtonsContainer } from './HazardCard.styled';
import dog from '../../assets/images/hazardImage.png'

const HazardCard = ({hazard}) => {
  return (
    <StyledHazardCard>
        <h2>{hazard.title}</h2>
        <h4>{hazard.address}</h4>
        <p>Recorded by {hazard.user} {hazard.date}</p>
        <img src={hazard.img || dog} alt={hazard.alt || 'hazard image'} />
        <HazardCardButtonsContainer>
            <p>show on map</p>
            <p>print</p>
            <p>edit</p>
            <p>delete</p>
        </HazardCardButtonsContainer>
    </StyledHazardCard>
  )
}

export default HazardCard