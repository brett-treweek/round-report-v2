import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import StyledRound from './Round.styled';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import HazardCard from '../../components/hazard-card/HazardCard';

const Round = () => {
	const { isLoading, round, roundHazards, getOneRound } = useAppContext();
	// const excecutedRef = useRef(false);
	console.log('Round page Rendered', round);
	const [view, setView] = useState('List');

	const changeView = () => {
		view === 'List' ? setView('Map') : setView('List');
	};

	console.log('Round!!!', round);

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
		</StyledRound>
	);
};

export default Round;
