// import Home from './pages/home/Home';
import { ThemeProvider } from 'styled-components';
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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="round" element={<Round />} />
					{/* <Route path="user-profile" element={<UserProfile />} /> */}
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
								<AddHazard />
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
