import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import StyledRoundSearch, {
	GoButton,
	SearchForm,
	SearchInput,
	SearchLabel,
} from './RoundSearch.styled';

const RoundSearch = () => {
	// console.log('roundSearch component rendered');

	// const excecutedRef = useRef(false);
	const [chosenNumber, setChosenNumber] = useState(null);
	const { setRound, selectedRound } = useAppContext();
	let navigate = useNavigate();

	// console.log('selectedRound on mount', selectedRound);

	const onSubmit = (e) => {
		e.preventDefault();
		setRound(chosenNumber);
		navigate('/round');
	};

	const onChange = (e) => {
		setChosenNumber(e.target.value);
	};

	return (
		<StyledRoundSearch>
			<SearchForm action="#" onSubmit={onSubmit}>
				<SearchLabel>Round Report</SearchLabel>
				<div style={{'position':'relative'}}>
					<SearchInput
						// defaultValue={selectedRound}
						type="number"
						min="1"
						max="10"
						onChange={onChange}
						placeholder='search'
					></SearchInput>
					<GoButton type="submit" disabled={!chosenNumber}>
						Go
					</GoButton>
				</div>
			</SearchForm>
		</StyledRoundSearch>
	);
};

export default RoundSearch;
