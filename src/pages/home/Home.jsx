import React, {useEffect, useRef } from 'react'
import { useAppContext } from '../../context/appContext.js';

import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import RoundSearch from '../../components/round-search/RoundSearch';
import StyledHome from './Home.styled';

const Home = () => {
    console.log('home page rendered');

  const excecutedRef = useRef(false); 
  const { getAllHazards } = useAppContext();

  	useEffect(() => {
      if (excecutedRef.current) {
        return
      }
		getAllHazards();
   excecutedRef.current = true;
	}, []);

  return (
    <StyledHome>
      <RoundSearch/>
      <Map totalHazards/>
      <RoundDetails icon/>
    </StyledHome>
  )
}

export default Home;