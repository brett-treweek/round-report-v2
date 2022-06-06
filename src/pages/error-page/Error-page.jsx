import React from 'react'
import { Link } from 'react-router-dom'
import StyledErrorPage from './Error-page.styled'

const ErrorPage = () => {
    console.log('error page rendered');

  return (
    <StyledErrorPage>
        <h1>404 Page Not Found</h1>
        <Link to="/">Back Home</Link>
    </StyledErrorPage>
  )
}

export default ErrorPage