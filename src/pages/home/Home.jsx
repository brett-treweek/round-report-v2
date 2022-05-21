import React from 'react'

import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import RoundSearch from '../../components/round-search/RoundSearch';
import StyledHome from './Home.styled';

const Home = () => {
  return (
    <StyledHome>
      <RoundSearch/>
      <Map/>
      <RoundDetails icon/>
    </StyledHome>
  )
}

export default Home;