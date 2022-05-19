import React from 'react'
import StyledHeader from './Header.styled';
import logo from '../../assets/icons/dog.png'

const Header = () => {
  return (
    <StyledHeader>
        {/* <img src={logo} alt='logo'/> */}
        <div>
            <h1>Round Report</h1>
            <h4>Palmyra DC</h4>
        </div>
    </StyledHeader>
  )
}

export default Header