import styled from 'styled-components'

const StyledAlert = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.background};
	font-weight: 700;
	color: red;
	text-align: center;
	line-height: 2rem;
	border-radius: 5px;
	box-shadow: ${({ theme }) => theme.boxShadowCard};
`;

export default StyledAlert;