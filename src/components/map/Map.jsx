import React, { useCallback, useMemo, useState, useRef } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useAppContext } from '../../context/appContext';
import StyledMap from './Map.styled';

function Map({ roundDeets }) {
	console.log('map component rendered');
	const { round } = useAppContext();
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	const mapRef = useRef();

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

	const onLoad = useCallback((map) => {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = false;
	}, []);

	return isLoaded ? (
		<StyledMap>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={
					roundDeets
						? {
								lat: round.startAddress.lat,
								lng: round.startAddress.lng,
						  }
						: center
				}
				zoom={14}
				options={options}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{roundDeets && (
					<MarkerF
						position={{
							lat: round.startAddress.lat,
							lng: round.startAddress.lng,
						}}
					/>
				)}
			</GoogleMap>
		</StyledMap>
	) : (
		<h1>Loading...</h1>
	);
}

export default React.memo(Map);
