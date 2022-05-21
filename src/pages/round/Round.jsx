import React, { useState } from 'react';
import StyledRound from './Round.styled';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import HazardCard from '../../components/hazard-card/HazardCard';

const Round = () => {
	const [view, setView] = useState('List');
	const changeView = () => {
		view === 'List' ? setView('Map') : setView('List');
	};

	const currentRound = {
		round: 'Round 2',
		start: 'Start: address',
		relay: 'Relay: address',
		lpo: 'LPO: address',
	};

	const hazards = [
		{
			title: 'Aggressive Dog',
			address: '5 Smith st Perth 6000',
			user: 'Brett Treweek',
			date: '01/06/2022',
			id: 1,
		},
		{
			title: 'Aggressive Cat',
			address: '10 Jones st Perth 6000',
			user: 'John Doe',
			date: '05/06/2022',
			id: 2,
		},
		{
			title: 'Aggressive Bird',
			address: '15 Central st Perth 6000',
			user: 'Jane Doe',
			date: '15/06/2022',
			id: 3,
		},
	];

	return (
		<StyledRound>
			<RoundDetails
				position
				top
				jc="start"
				roundDeets={currentRound}
				changeView={changeView}
				view={view}
			/>
			{view === 'List' ? (
				<Map/>
			) : (
				hazards.map((hazard) => (
					<HazardCard key={hazard.id} hazard={hazard} />
				))
			)}
		</StyledRound>
	);
};

export default Round;
