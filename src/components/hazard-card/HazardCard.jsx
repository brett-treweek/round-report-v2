import React from 'react';
import StyledHazardCard, {
	HazardCardButtonsContainer,
} from './HazardCard.styled';
import { remove, pin, print, edit } from '../../assets/icons/index';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
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
	console.log('hazardCard component rendered');
	const date = moment(createdAt).format('Do MMM, YYYY');

	const cld = new Cloudinary({
		cloud: {
			cloudName: 'tigmarine',
		},
	});

	const img = cld.image(imageUrl);

	return (
		<StyledHazardCard>
			<p>Round {hazardRound}</p>
			<h3>
				{index}. {hazardType}
			</h3>
			<h4>{hazardAddress.address}</h4>
			{message && <p>"{message}"</p>}
			<p>Created by: {createdByUsername}</p>
			<p>{date}</p>
			<AdvancedImage cldImg={img} alt={alt || 'hazard image'} />
			<HazardCardButtonsContainer>
				<img src={pin} alt="map pin" />
				<img src={print} alt="print" />
				<img src={edit} alt="edit" />
				<img src={remove} alt="remove" />
			</HazardCardButtonsContainer>
		</StyledHazardCard>
	);
};

export default HazardCard;
