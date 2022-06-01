import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledRound from './Round.styled';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import HazardCard from '../../components/hazard-card/HazardCard';

const Round = () => {
	const { getOneRound, isLoading, round, roundHazards } =
		useAppContext();
	const [view, setView] = useState('List');
	const changeView = () => {
		view === 'List' ? setView('Map') : setView('List');
	};

	// I think this useEffect is rendering page twice!
	useEffect(()=> {
		getOneRound(1)
	},[])
	

	return (
		// <h1>What</h1>
		<StyledRound>
			<RoundDetails
				position
				top
				jc="start"
				roundDeets={round}
				changeView={changeView}
				view={view}
			/>
			{view === 'List' ? (
				<Map />
			) : (
				roundHazards.map((hazard) => {
					return <HazardCard {...hazard} key={hazard._id} />;
				})
			)}
		</StyledRound>
	);
};

export default Round;
