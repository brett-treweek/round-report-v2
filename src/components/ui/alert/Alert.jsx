import React from 'react'
import { useAppContext } from '../../../context/appContext'
import StyledAlert from './Alert.styled'

const Alert = () => {
    const { alertType, alertText } = useAppContext()

  return (
    <StyledAlert className={alertType}>{alertText}</StyledAlert>
  )
}

export default Alert;