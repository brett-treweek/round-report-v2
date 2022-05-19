import Home from './pages/home/Home';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/theme';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Home />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
