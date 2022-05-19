import React from 'react'
import StyledMap from './Map.styled';
import img from '../../assets/icons/map.png';


const Map = () => {
  return (
    <StyledMap>
        <img src={img} alt='map'></img>
    </StyledMap>
  )
}

export default Map