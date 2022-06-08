import React from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components'

const SpinnerContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(theme) => theme.background};
`

const Spinner = () => {
  return (
		<SpinnerContainer>
			<Icon
				icon="eos-icons:bubble-loading"
				color="#699bf7"
				height="155"
			/>
		</SpinnerContainer>
  );
}

export default Spinner