import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Alert from '../ui/alert/Alert';
import StyledRoundSearch, {
	GoButton,
	SearchForm,
	SearchInput,
	SearchLabel,
} from './RoundSearch.styled';

const RoundSearch = () => {
	const [chosenNumber, setChosenNumber] = useState(null);
	const { setRound, selectedRound } = useAppContext();
	let navigate = useNavigate();

	console.log('selectedRound on mount', selectedRound);

	const onSubmit = (e) => {
		e.preventDefault();
		navigate('/round');
	};

	const onChange = (e) => {
		setChosenNumber(e.target.value);
	};

	// why is useEffect angry? maybe useCallback instead?
	useEffect(() => {
		if (!chosenNumber) {
			return;
		}
		setRound(chosenNumber);
	}, [chosenNumber]);

	return (
		<StyledRoundSearch>
			<SearchForm action="#" onSubmit={onSubmit}>
				<SearchLabel>Enter round number</SearchLabel>
				<SearchInput
					defaultValue={selectedRound}
					type="number"
					min="1"
					max="10"
					autoFocus
					onChange={onChange}
				></SearchInput>
				<GoButton type="submit" disabled={!selectedRound}>
					Go
				</GoButton>
			</SearchForm>
		</StyledRoundSearch>
	);
};

export default RoundSearch;
