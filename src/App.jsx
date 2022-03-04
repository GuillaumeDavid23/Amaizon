import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import Header from './templates/Header/Header'
import Footer from './templates/Footer/Footer'
import About from './pages/About/About'
import Appointment from './pages/Appointment/Appointment'
import Backoffice from './pages/Backoffice/Backoffice'
import Connect from './pages/Connect/Connect'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Legals from './pages/Legals/Legals'
import Register from './pages/Register/Register'
import Single from './pages/Single/Single'
import VerifEmail from './pages/VerifEmail/VerifEmail'

export const Context = createContext({
	connected: false,
	userInfos: {},
	authToken: null,
})

export function App() {
	// AUTHENTIFICATION
	// Déclaration des states et des contexts:
	const [isConnected, setConnexion] = useState(false)
	const [token, setToken] = useState(null)
	const [userInfos, setUserInfos] = useState(null)

	// Check de l'existence d'un token:
	let tokenLS = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH_AMAIZON'))
	if (tokenLS && token === null) {
		setToken(tokenLS)
	}

	useEffect(() => {
		if (token) {
			// Check de la validité du token:
			fetch(process.env.REACT_APP_API_DOMAIN + 'api/user/checkBearer', {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + token,
					'Content-Type': 'application/json;charset=utf-8',
				},
			})
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					if (response.status_code && response.status_code === 200) {
						// On gère la vérification de l'email:
						if (
							response.userInfos &&
							response.userInfos === undefined
						) {
							// On set la connexion à true:
							setConnexion(true)
							setUserInfos(userInfos)
						} else {
							setConnexion(false)
						}
					} else {
						setConnexion(false)
						localStorage.clear()
						setToken(null)
					}
				})
		}
	}, [token])
	return (
		<Context.Provider
			value={{
				connected: isConnected,
				userInfos: userInfos,
				authToken: token,
			}}
		>
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home setUserInfos={setUserInfos} />}
					/>
					<Route path="/aboutus" element={<About />} />
					<Route path="/takeAppointment/:id" element={<Appointment />} />
					<Route path="/backoffice" element={<Backoffice />} />
					<Route path="/connect" element={<Connect />} />
					<Route path="/contactus" element={<Contact />} />
					<Route path="/legals" element={<Legals />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/single/:id"
						element={<Single token={token} />}
					/>
					<Route
						path="/emailVerification/:token"
						element={<VerifEmail />}
					/>
				</Routes>
				<Footer />
			</Router>
		</Context.Provider>
	)
}
