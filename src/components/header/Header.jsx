import React from 'react'
import StyledHeader from './Header.styled';

const Header = () => {
  // console.log('header component rendered');
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