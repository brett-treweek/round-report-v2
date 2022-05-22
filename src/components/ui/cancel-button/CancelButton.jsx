import React from 'react'
import StyledCancelButton from './CancelButton.styled'

const CancelButton = ({onClick}) => {
  return (
    <StyledCancelButton onClick={onClick}>X</StyledCancelButton>
  )
}

export default CancelButton