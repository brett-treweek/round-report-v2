import React from 'react';
import { useAppContext } from '../../../context/appContext';
import HazardSearch from '../../../components/hazard-search/HazardSearch';
import StyledAllHazards, {
	HazardsContainer,
	InnerHazardsContainer,
  InnerHazardsGrid,
} from './AllHazards.styled';
import HazardCard from '../../../components/hazard-card/HazardCard';

const AllHazards = () => {
	// console.log('allHazards page rendered');
	const { isLoading, allHazards, totalAllHazards } =
		useAppContext();

// I think this useEffect is rendering page twice!!!


	return (
		<StyledAllHazards>
			All Hazards
			<HazardSearch />
			<HazardsContainer>
				{isLoading ? (
					'Loading...'
				) : (
					<InnerHazardsContainer>
						{totalAllHazards === 0 ? (
							<h1>No Hazards To Display</h1>
						) : (
							<div>
								<h2>
									{totalAllHazards} hazard
									{totalAllHazards > 1 && 's'} found
								</h2>
								<InnerHazardsGrid>
									{allHazards.map((hazard, index) => {
										return (
											<HazardCard
												{...hazard}
												key={hazard._id}
												index={index + 1}
											/>
										);
									})}
								</InnerHazardsGrid>
							</div>
						)}
					</InnerHazardsContainer>
				)}
			</HazardsContainer>
		</StyledAllHazards>
	);
};

export default AllHazards;
