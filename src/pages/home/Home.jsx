import React, { useEffect } from 'react';
import { useAppContext } from '../../context/appContext.js';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import RoundSearch from '../../components/round-search/RoundSearch';
import StyledHome from './Home.styled';
import { Footer } from '../../components/index.js';
import Spinner from '../../components/ui/loading/Spinner.jsx';

const Home = () => {
	
	const { isLoading, getAllHazards, mapLoaded } = useAppContext();
	
	console.log('home page rendered', mapLoaded);

	useEffect(() => {
		getAllHazards();
	}, []);
	
	if (isLoading) return <Spinner />;

	return (
		<StyledHome>
			{!isLoading ? <Map homeHazards /> : <Spinner />}
			<RoundSearch />
			<div className="details-footer">
				<RoundDetails />
				<Footer />
			</div>
		</StyledHome>
	);
};

export default Home;
