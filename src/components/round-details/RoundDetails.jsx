import React from 'react';
import StyledDetails, {
	DetailsCard,
	IconContainer,
	Inline,
	InnerContainer,
} from './RoundDetails.styled';
import { Icon } from '@iconify/react';
import { Button } from '../../components/ui/button/Button.styled';
import { Link, useNavigate } from 'react-router-dom';

const RoundDetails = ({ roundDeets, changeView, view }) => {
	const navigate = useNavigate()
	// console.log('roundDetails component rendered');
	return (
		<StyledDetails>
			<DetailsCard>
				<InnerContainer>
					<div>
						{roundDeets ? (
							<h2>Round {roundDeets.roundNumber}</h2>
						) : (
							<h2>Palmyra DC</h2>
						)}
						{roundDeets ? (
							<Inline>
								<h5>Start:</h5>
								<p>{roundDeets.startAddress.address}</p>
							</Inline>
						) : (
							<p>8 Absolon St. Palmyra 6157</p>
						)}
						{roundDeets ? (
							<Inline>
								<h5>Relay:</h5>
								<p>{roundDeets.relay.address}</p>
							</Inline>
						) : null}
						{roundDeets ? (
							<Inline>
								<h5>LPO:</h5>
								<p>{roundDeets.lpo.address}</p>
							</Inline>
						) : (
							<>
								<p>9300600</p>
								<p>wcc: 135 780</p>
							</>
						)}
					</div>
					{roundDeets ? null : (
						<a href="tel:9300600">
							<Icon
								className="icon"
								icon="fa-solid:phone-alt"
								// color="#DC1928"
								// height="40"
							/>
						</a>
					)}
				</InnerContainer>
				{roundDeets ? (
					<IconContainer>
						<Button onClick={changeView}>{view}</Button>
						<Button onClick={()=>navigate('/')}>Home</Button>
					</IconContainer>
				) : null}
			</DetailsCard>
		</StyledDetails>
	);
};

export default RoundDetails;

{
	/* <Button className='admin'>Print Report</Button>
						<Link to={'/edit-round'}>
							<Icon
								className="icon admin"
								icon="ci:edit"
								color="#fff"
							/>
						</Link> */
}
