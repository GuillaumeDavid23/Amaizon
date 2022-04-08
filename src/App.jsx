import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import Header from './templates/Header/Header'
import Footer from './templates/Footer/Footer'
import About from './pages/About/About'
import Appointment from './pages/Appointment/Appointment'
import Backoffice from './pages/Backoffice/Backoffice'
import Connect from './pages/Connect/Connect'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'
import ForgetPass from './pages/ForgetPass/ForgetPass'
import Home from './pages/Home/Home'
import Legals from './pages/Legals/Legals'
import Register from './pages/Register/Register'
import Single from './pages/Single/Single'
import VerifEmail from './pages/VerifEmail/VerifEmail'
import { AnimatePresence } from 'framer-motion'

export const Context = createContext({
	connected: false,
	userInfos: {},
	setUserInfo: null,
	authToken: null,
})

export function App() {
	// AUTHENTIFICATION
	// Déclaration des states et des contexts:
	const [isConnected, setConnexion] = useState(false)
	const [token, setToken] = useState(null)
	const [userInfos, setUserInfos] = useState(null)

	// Check de l'existence d'un token:
	if (localStorage.getItem('REACT_TOKEN_AUTH_AMAIZON')) {
		let tokenLS = JSON.parse(
			localStorage.getItem('REACT_TOKEN_AUTH_AMAIZON')
		)
		if (tokenLS && token === null) {
			setToken(tokenLS)
		}
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
						// On set la connexion à true:
						setConnexion(true)
						setUserInfos(response.userInfos)
					} else {
						// On check le refreshToken:
						if (
							localStorage.getItem(
								'REACT_REFRESH_TOKEN_AUTH_AMAIZON'
							)
						) {
							let refreshToken = JSON.parse(
								localStorage.getItem(
									'REACT_REFRESH_TOKEN_AUTH_AMAIZON'
								)
							)
							if (refreshToken) {
								// Check de la validité du token:
								fetch(
									process.env.REACT_APP_API_DOMAIN +
										'api/user/checkResetToken/' +
										refreshToken,
									{ method: 'GET' }
								)
									.then((response) => {
										return response.json()
									})
									.then((response) => {
										if (
											response.status_code &&
											response.status_code === 200
										) {
											localStorage.setItem(
												'REACT_TOKEN_AUTH_AMAIZON',
												JSON.stringify(response.token)
											)
											// On set la connexion à true:
											setConnexion(true)
											setUserInfos(response.userInfos)
										} else {
											setConnexion(false)
											localStorage.clear()
											setToken(null)
										}
									})
							} else {
								setConnexion(false)
								localStorage.clear()
								setToken(null)
							}
						} else {
							setConnexion(false)
							localStorage.clear()
							setToken(null)
						}
					}
				})
		}
	}, [token])

	const location = useLocation()
	return (
		<Context.Provider
			value={{
				connected: isConnected,
				userInfos: userInfos,
				setUserInfo: setUserInfos,
				authToken: token,
			}}
		>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Routes key={location.pathname} location={location}>
					<Route
						exact
						path="/"
						element={<Home setUserInfos={setUserInfos} />}
					/>
					<Route path="/aboutus" element={<About />} />
					<Route
						path="/takeAppointment/:id"
						element={<Appointment />}
					/>
					<Route
						path="/backoffice"
						element={isConnected ? <Backoffice /> : <Connect />}
					/>
					<Route path="/connect" element={<Connect />} />
					<Route path="/contactus" element={<Contact />} />
					{!isConnected && (
						<Route
							path="/forgetPass"
							element={<ForgetPass step="before" />}
						/>
					)}
					{!isConnected && (
						<Route
							path="/resetPassword/:id/:token"
							element={<ForgetPass step="after" />}
						/>
					)}
					{/* {!isConnected && (
							<Route
								path="/forgetPass"
								element={<ForgetPass step="before" />}
							/>
						) && (
							<Route
								path="/resetPassword/:id/:token"
								element={<ForgetPass step="after" />}
							/>
						)} */}
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
					<Route path="*" element={<Error />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</Context.Provider>
	)
}
