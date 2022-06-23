import React from 'react'
import { useAppContext } from '../../../context/appContext';

import StyledAllRounds from './AllRounds.styled'

const AllRounds = () => {
  // console.log('allRounds rendered');
  const { isLoading, } =
		useAppContext();
  return (
    <StyledAllRounds>
      <h1>Rounds</h1>
      <h4>list of rounds with brief details(clickable) and print report btn</h4>
      <h4>create new round</h4>
      <h4>edit existing round</h4>
      <h4>delete round with option to delete all associated hazards?</h4>
    </StyledAllRounds>
  )
}

export default AllRounds