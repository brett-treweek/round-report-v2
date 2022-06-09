import styled from 'styled-components';


const StyledMap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	/* min-height: 30vh; */
	height: 100%;
	width: 100%;

	.infowindow {
		width: 230px;
		height: 300px;
	}

	.image {
		height: 200px;
		width: 100%;
	}
`;

export const InfowindowContainer = styled.div`
	padding: 0;
`;

export default StyledMap;