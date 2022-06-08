import React, { useMemo, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useAppContext } from '../../context/appContext';
import StyledMap from './Map.styled';
import { post } from '../../assets/icons/index';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

function Map({ roundDeets, totalHazards }) {
	const { round, roundHazards, allHazards } = useAppContext();
	const [selected, setSelected] = useState(null);

		const cld = new Cloudinary({
			cloud: {
				cloudName: 'tigmarine',
			},
		});

		

	const containerStyle = useMemo(
		() => ({
			width: '100%',
			height: '100%',
		}),
		[]
	);

	const center = useMemo(() => ({ lat: -32.051687, lng: 115.790637 }), []);

	const options = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: false,
			// mapId: '5ef80f0325514b92',
		}),
		[]
	);

	return (
		<StyledMap>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={roundDeets ? round.startAddress.latlng : center}
				zoom={12}
				options={options}
			>
				<Marker position={center} icon={post} />
				{roundDeets && (
					<Marker
						position={round.startAddress.latlng}
						onClick={(e) => {
							console.log(e);
						}}
					/>
				)}
				{roundDeets && roundHazards
					? roundHazards.map((hazard) => {
							return (
								<Marker
									key={hazard._id}
									position={hazard.hazardAddress.latlng}
									onClick={() => {
										setSelected(hazard);
									}}
								/>
							);
					  })
					: null}
				{totalHazards && allHazards
					? allHazards.map((hazard) => {
							return (
								<Marker
									key={hazard._id}
									position={hazard.hazardAddress.latlng}
									onClick={() => {
										setSelected(hazard);
										console.log('Selected', selected);
									}}
								/>
							);
					  })
					: null}
				{selected ? (
					<InfoWindow
						position={{
							lat: selected.hazardAddress.latlng.lat,
							lng: selected.hazardAddress.latlng.lng,
						}}
						onCloseClick={() => {
							setSelected(null);
						}}
					>
						<div>
							<h3>{selected.hazardType}</h3>
							<p>{selected.hazardAddress.address}</p>
							<p>Round Number: {selected.roundNumber}</p>
							<AdvancedImage
								className='image'
								cldImg={cld.image(selected.imageUrl)}
								alt={selected.alt || 'hazard image'}
							/>
						</div>
					</InfoWindow>
				) : null}
			</GoogleMap>
		</StyledMap>
	);
}

export default React.memo(Map);
