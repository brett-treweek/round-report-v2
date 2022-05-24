import Home from './pages/home/Home';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/theme';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Round from './pages/round/Round';
import Login from './pages/login/Login';
import AddHazard from './pages/add-hazard/AddHazard';
import EditRound from './pages/edit-round/EditRound';
import ErrorPage from './pages/error-page/Error-page';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="round" element={<Round />} />
						<Route path="login" element={<Login />} />
						<Route path="addHazard" element={<AddHazard />} />
						<Route path="editRound" element={<EditRound />} />
						<Route path="/*" element={<ErrorPage />} />
					</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
