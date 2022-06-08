import React, { useRef } from 'react';
import { useAppContext } from '../../context/appContext.js';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import RoundSearch from '../../components/round-search/RoundSearch';
import StyledHome from './Home.styled';
import { Footer, Header } from '../../components/index.js';
import Spinner from '../../components/ui/loading/Spinner.jsx';


const Home = ({ isLoaded }) => {
	console.log('home page rendered', isLoaded);


	return (
		<StyledHome>
			{isLoaded ? <Map totalHazards /> : <Spinner>Loading...</Spinner>}
			<RoundSearch />
			<div className="details-footer">
				<RoundDetails />
				<Footer />
			</div>
		</StyledHome>
	);
};

export default Home;
