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
} from './pages/index';
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
