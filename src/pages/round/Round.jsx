import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import StyledRound from './Round.styled';
import Map from '../../components/map/Map';
import RoundDetails from '../../components/round-details/RoundDetails';
import HazardCard from '../../components/hazard-card/HazardCard';
import { Footer } from '../../components';
import Spinner from '../../components/ui/loading/Spinner';

const Round = () => {
	console.log('Round page Rendered');
	const { isLoading, round, roundHazards } = useAppContext();
	const [view, setView] = useState('List');

	const changeView = () => {
		view === 'List' ? setView('Map') : setView('List');
	};

	if (isLoading) {
		return <Spinner />;
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
			<div className="footer-div">
				<Footer />
			</div>
		</StyledRound>
	);
};

export default Round;
