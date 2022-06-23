import React from 'react';
import { useAppContext } from '../../context/appContext';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import StyledPlaces, {
	PlacesInput,
	PlacesLabel,
	PlacesList,
	PlacesUl,
} from './Places.styled';

const Places = ({ label, name }) => {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: { lat: () => -32.051687, lng: () => 115.790637 },
			radius: 3000,
		},
		debounce: 300,
	});
	const { handleChange } = useAppContext();

	const ref = useOnclickOutside(() => {
		// When user clicks outside of the component, we can dismiss
		// the searched suggestions by calling this method
		clearSuggestions();
	});

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value);
	};

	const handleSelect =
		({ description }) =>
		() => {
			// When user selects a place, we can replace the keyword without request data from API
			// by setting the second parameter to "false"
			setValue(description, false);
			clearSuggestions();
			// const name = 'hazardAddress'
			// const value = description

			// console.log('Address description', description);
			// console.log('name', name);
			// handleChange({name, value});

			// Get latitude and longitude via utility functions
			getGeocode({ address: description }).then((results) => {
				try {
					// console.log('results', results[2]);
					const { lat, lng } = getLatLng(results[0]);
					console.log('📍 Coordinates: ', { lat, lng });

					// const name = 'hazardAddress';
					const value = {
						address: description,
						latlng: { lat: lat, lng: lng },
					};
					
					handleChange({ name, value });
					if (name === 'startAddress') {
						console.log('33333333333',value.address);
						console.log('suburb from getGeoCode', results[0].address_components[2].long_name);
						const name = 'suburb';
						const suburb =
							results[0].address_components[2].long_name;
						handleChange({ name, value: suburb });
					}
				} catch (error) {
					console.log('😱 Error: ', error);
				}
			});
		};

	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion;

			return (
				<PlacesList key={place_id} onClick={handleSelect(suggestion)}>
					{main_text}, {secondary_text}
				</PlacesList>
			);
		});

	return (
		<StyledPlaces ref={ref}>
			<PlacesLabel>{label}</PlacesLabel>
			<PlacesInput
				value={value}
				onChange={handleInput}
				disabled={!ready}
				// placeholder="Where is the hazard?"
			/>
			{/* We can use the "status" to decide whether we should display the dropdown or not */}
			{status === 'OK' && <PlacesUl>{renderSuggestions()}</PlacesUl>}
		</StyledPlaces>
	);
};

export default Places;
