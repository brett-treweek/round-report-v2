import { useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { useJsApiLoader } from '@react-google-maps/api';

import { useAppContext } from './context/appContext';

import theme from './assets/theme/theme';
import {
	Home,
	Round,
	Login,
	AddHazard,
	ErrorPage,
	EditRound,
	ProtectedRoute,
	UserProfile,
} from './pages/index';
import {
	AllHazards,
	AllRounds,
	AllUsers,
	SharedLayout,
} from './pages/admin/index';
import { Header, Footer } from './components/index';
import { Routes, Route } from 'react-router-dom';
// const places = ['places']

function App() {
	const places = useMemo(() => 
		['places']
	,[])
	const { mapIsLoaded } = useAppContext()
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: places,
	});

	const bounds = useMemo(
		() =>
			([
				{ lat: -34, lng: 113 },
				{ lat: -30, lng: 118 },
			]),
		[]
	);
	console.log('bounds', bounds);

	console.log('app rendered', isLoaded);

	useEffect(() => {
		console.log('useEffect running');
		if (!isLoaded) {
			return
		}
		mapIsLoaded()
	}, [isLoaded]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="round" element={<Round />} />
					<Route path="login" element={<Login />} />
					<Route
						path="user-profile"
						element={
							<ProtectedRoute>
								<UserProfile />
							</ProtectedRoute>
						}
					/>
					<Route
						path="add-hazard"
						element={
							<ProtectedRoute>
								<AddHazard bounds={bounds}/>
							</ProtectedRoute>
						}
					/>
					<Route
						path="edit-round"
						element={
							<ProtectedRoute>
								<EditRound />
							</ProtectedRoute>
						}
					/>
					<Route
						path="admin"
						element={
							<ProtectedRoute>
								<SharedLayout />
							</ProtectedRoute>
						}
					>
						<Route index element={<AllHazards />} />
						<Route path="all-rounds" element={<AllRounds />} />
						<Route path="all-users" element={<AllUsers />} />
					</Route>
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
