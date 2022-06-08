import React from 'react';
import StyledRoundTitle, { RoundTitleInner, OptionsContainer } from './RoundTitle.styled';

const RoundTitle = () => {
	// console.log('roundTitle component rendered');
	return (
		<StyledRoundTitle>
			<RoundTitleInner>
				<h4>Round 2</h4>
				<OptionsContainer>
					<p>edit</p>
					<p>print</p>
				</OptionsContainer>
			</RoundTitleInner>
		</StyledRoundTitle>
	);
};

export default RoundTitle;
