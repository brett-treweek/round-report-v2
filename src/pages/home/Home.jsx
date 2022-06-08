import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/appContext.js';

import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import RoundSearch from '../../components/round-search/RoundSearch';
import StyledHome from './Home.styled';
import { Footer, Header } from '../../components/index.js';

const Home = () => {
	console.log('home page rendered');

	const excecutedRef = useRef(false);
	const { getAllHazards } = useAppContext();

	useEffect(() => {
		if (excecutedRef.current) {
			return;
		}
		getAllHazards();
		excecutedRef.current = true;
		console.log('HOme useEffect ran');
	});

	return (
		<StyledHome>
			<Map totalHazards />	
			<RoundSearch />
			<div className='details-footer'>
			<RoundDetails />
			<Footer/>
			</div>
		</StyledHome>
	);
};

export default Home;
