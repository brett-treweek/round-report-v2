import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledRound from './Round.styled';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import HazardCard from '../../components/hazard-card/HazardCard';
import { Footer } from '../../components';

const Round = () => {
	// console.log('Round page Rendered');
	const { isLoading, round, roundHazards, getOneRound, selectedRound } = useAppContext();
	const excecutedRef = useRef(false);
	const [view, setView] = useState('List');

	const changeView = () => {
		view === 'List' ? setView('Map') : setView('List');
	};

	useEffect(() => {
		// console.log('!!!!!!!!!!!!!!!!');
		if (excecutedRef.current) {
			return;
		}
		getOneRound(selectedRound || round.roundNumber)
		excecutedRef.current = true;
		// console.log('Round useEffect ran');
	},[round.roundNumber, getOneRound, selectedRound]);

	if (isLoading) {
		return 'Loading...';
	}

	return (
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
				<Map roundDeets />
			) : (
				roundHazards.map((hazard, index) => {
					return (
						<HazardCard
							{...hazard}
							key={hazard._id}
							index={index + 1}
						/>
					);
				})
			)}
		<Footer/>
		</StyledRound>
	);
};

export default Round;
