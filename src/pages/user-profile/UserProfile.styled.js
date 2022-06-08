import styled from 'styled-components';

const StyledUserProfile = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	/* gap: 2rem; */
	/* padding: 0 1rem; */
	min-height: 100vh;
	height: 100%;
	width: 100%;
	background-color: ${({ theme }) => theme.background};

	.title {
		font-weight: 600;
	}
`;

export const UserCard = styled.div`
	position: ${({ position }) => 'sticky' || 'static'};
	top: ${({ top }) => '1rem'};
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 1rem 2rem;
	gap: 0.5rem;
	height: 100%;
	width: 93%;
	max-width: 500px;
	border-radius: 15px;
	border-bottom-right-radius: 50%;
	color: ${({ theme }) => theme.text};
	opacity: 0.97;
	background: ${({ theme }) => theme.backgroundCard};
	box-shadow: ${({ theme }) => theme.boxShadowCard};
	backdrop-filter: blur(2px);
	border: 3px solid ${({ theme }) => theme.backgroundCard};

	div {
		text-align: left;
		line-height: 1.4;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 500;
	}

	h5 {
		font-size: 12px;
		font-weight: 600;
	}

	p {
		font-size: 12px;
		font-weight: 500;
	}
`;

export default StyledUserProfile;
