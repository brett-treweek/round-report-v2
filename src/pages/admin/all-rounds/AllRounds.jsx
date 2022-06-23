import React from 'react'
import { useAppContext } from '../../../context/appContext';
import {navigate, Link} from 'react-router-dom'

import StyledAllRounds from './AllRounds.styled'

const AllRounds = () => {
  // console.log('allRounds rendered');
  const { isLoading, } =
		useAppContext();

  // const addRoundClickHandler = () => {
  //   console.log('add round clicked');
  // }


  return (
		<StyledAllRounds>
			<h1>Rounds</h1>
			<h4>
				list of rounds with brief details(clickable) and print report
				btn
			</h4>
			<h4>create new round</h4>
			<h4>edit existing round</h4>
			<h4>delete round with option to delete all associated hazards?</h4>
			<Link to="/admin/add-round"
      //  onClick={addRoundClickHandler}
       >
				Create New Round
			</Link>
		</StyledAllRounds>
  );
}

export default AllRounds