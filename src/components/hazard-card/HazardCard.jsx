import React from 'react';
import StyledHazardCard, {
	HazardCardButtonsContainer,
} from './HazardCard.styled';
import { remove, pin, print, edit } from '../../assets/icons/index';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

import moment from 'moment';

const HazardCard = ({
	hazardRound,
	hazardType,
	hazardAddress,
	message,
	createdAt,
	alt,
	createdByUsername,
	imageUrl,
	index,
}) => {
	// console.log('hazardCard component rendered');
	const date = moment(createdAt).format('Do MMM, YYYY');
	console.log('111111', hazardAddress);
	const add = hazardAddress.address.split(',');

	const cld = new Cloudinary({
		cloud: {
			cloudName: 'tigmarine',
		},
	});

	const img = cld.image(imageUrl);
	img
		.resize(scale().width(300))

	return (
		<StyledHazardCard>
			<AdvancedImage
				className="image"
				cldImg={img}
				alt={alt || 'hazard image'}
			/>
			<div className="hazard-details">
				<div className="title-container">
					<h3>
						{index}. {hazardType}
					</h3>
					<p>Round {hazardRound}</p>
				</div>
				<h4>
					{add[0]}, {add[1]}
				</h4>

				{message && <p>"{message}"</p>}

				<p>
					Created by {createdByUsername} - {date}
				</p>
				<p></p>
			</div>
			{/* <HazardCardButtonsContainer>
				<img src={pin} alt="map pin" />
				<img src={print} alt="print" />
				<img src={edit} alt="edit" />
				<img src={remove} alt="remove" />
			</HazardCardButtonsContainer> */}
		</StyledHazardCard>
	);
};

export default HazardCard;
