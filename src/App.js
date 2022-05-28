import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import NaviBar from './components/Navibar';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Footer from './components/Footer';

function App() {
	return (
		<>

			<div className="main" style={{ backgroundColor: '#f0f0f0' }}>
				<Router>
					<NaviBar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/users" element={<Users />} />
					</Routes>
				</Router>
			</div>
			<Footer />
		</>
	);
}

export default App;
