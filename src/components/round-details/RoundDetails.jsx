import React from 'react'
import StyledDetails, { DetailsCard } from './RoundDetails.styled'

const RoundDetails = () => {
  return (
    <StyledDetails>
        <DetailsCard>
            <p>Phone</p>
            <div>
                <h2>Palmyra DC</h2>
                <p>8 Absolon St. Palmyra 6157</p>
                <p>Contact: John Smith</p>
                <p>Ph: 9300600</p>
                <p>wcc: 135780</p>
            </div>
        </DetailsCard>
    </StyledDetails>
  )
}

export default RoundDetails