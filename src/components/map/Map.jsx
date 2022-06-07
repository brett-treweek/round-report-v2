import React, { useMemo } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useAppContext } from '../../context/appContext';
import StyledMap from './Map.styled';


function Map({ roundDeets, totalHazards }) {
	const { round, roundHazards, allHazards, mapLoaded } = useAppContext();
	console.log('map component rendered', mapLoaded);
	

	// const mapRef = useRef();

	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	const center = useMemo(() => ({ lat: -32.03784, lng: 115.80174 }), []);
	

	const options = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: false,
			mapId: '5ef80f0325514b92',
		}),
		[]
	);

	// const onLoad = useCallback((map) => {
	// 	mapRef.current = map;
	// }, []);

	// const onUnmount = React.useCallback(function callback(map) {
	// 	mapRef.current = false;
	// }, []);

	return mapLoaded ? (
		<StyledMap>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={roundDeets ? round.startAddress.latlng : center}
				zoom={12}
				options={options}
				// onLoad={onLoad}
				// onUnmount={onUnmount}
			>
				<MarkerF position={center} />
				{roundDeets && <MarkerF position={round.startAddress.latlng} />}
				{roundDeets && roundHazards
					? roundHazards.map((hazard) => {
							return (
								<MarkerF
									key={hazard._id}
									position={hazard.hazardAddress.latlng}
								/>
							);
					  })
					: null}
				{totalHazards && allHazards
					? allHazards.map((hazard) => {
							return (
								<MarkerF
									key={hazard._id}
									position={hazard.hazardAddress.latlng}
								/>
							);
					  })
					: null}
			</GoogleMap>
		</StyledMap>
	) : (
		<h1>Loading...</h1>
	);
}

export default React.memo(Map);
