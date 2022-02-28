import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './templates/Header'
import Footer from './templates/Footer/Footer'
import About from './pages/About/About'
import Appointment from './pages/Appointment/Appointment'
import Backoffice from './pages/Backoffice/Backoffice'
import Connect from './pages/Connect/Connect'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Legals from './pages/Legals/Legals'
import Single from './pages/Single/Single'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={Home} />
					<Route path="/aboutus" element={About} />
					<Route path="/takeAppointment" element={Appointment} />
					<Route path="/backoffice" element={Backoffice} />
					<Route path="/connect" element={Connect} />
					<Route path="/contactus" element={Contact} />
					<Route path="/legals" element={Legals} />
					<Route path="/single" element={Single} />
				</Routes>
				<Footer />
			</Router>
		</>
	)
}

export default App
