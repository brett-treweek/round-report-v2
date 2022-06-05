import React from 'react';
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import StyledMap from './Map.styled';
import { MapTheme } from '../../assets/theme/mapTheme';

const center = {
	lat: -32.03784,
	lng: 115.80174,
};

const Map = () => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	if (loadError) return <p>"error loading map"</p>;
	if (!isLoaded) {
		return <p>Loading...</p>;
	}

	return (
		<StyledMap>
			<GoogleMap
				center={center}
				zoom={12.5}
				mapContainerStyle={{ width: '100%', height: '100%' }}
				options={{
					styles: MapTheme,
					zoomControl: false,
					streetViewControl: false,
					fullscreenControl: false,
					mapTypeControl: false,
				}}
			>
        <Marker position={center}/>
				{/* {props &&
					props.hazardData.map((marker) => (
						<Marker
							key={marker._id}
							position={{ lat: marker.lat, lng: marker.lng }}
							icon={{
								url: './icons/redwarning.png',
								scaledSize: new window.google.maps.Size(25, 25),
							}}
							onClick={() => {
								setSelected(marker);
							}}
						/>
					))}

				{selected ? (
					<InfoWindow
						className="infoWindow"
						position={{ lat: selected.lat, lng: selected.lng }}
						onCloseClick={() => {
							console.log(selected);
							setSelected(null);
						}}
					>
						<div className="infoContainer">
							<h3 className="infoH3">{selected.hazardType}</h3>
							<p className="infoP">{selected.address}</p>
							<p className="infoP">
								Round Number: {selected.roundNumber}
							</p>
							<p className="infoP">{selected.message}</p>
							{Auth.loggedIn() && (
								<button
									className="infoDelete"
									onClick={handleDelete}
								>
									Delete
								</button>
							)}
						</div>
					</InfoWindow>
				) : null} */}
			</GoogleMap>
		</StyledMap>
	);
};

export default React.memo(Map);
