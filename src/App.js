import Home from './pages/home/Home';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/theme';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Round from './pages/round/Round';
import Login from './pages/login/Login';
import AddHazard from './pages/add-hazard/AddHazard';

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
					</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
