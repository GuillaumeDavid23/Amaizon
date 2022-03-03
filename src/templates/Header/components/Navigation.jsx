import { Navbar, Nav } from 'react-bootstrap'

//search form components
import Search from './Form'

//navigation link component
import Link from './Link'

// Import Vincent pour Bouton d'accès au form login:
import { Link as LinkRouterDom } from 'react-router-dom'
import { Dropdown, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../../../App'

// This components is for create navigation link and forms
const Navigation = () => {
	//Array for create navigation link
	const linkArray = [
		{ name: 'Accueil', link: '/' },
		{ name: 'A propos', link: '/aboutus' },
		{ name: 'Contact', link: '/contactus' },
	]

	// Gestion de la déconnexion:
	const disconnect = () => {
		localStorage.clear()
		window.location.href = process.env.REACT_APP_UI_DOMAIN
	}

	let isConnected = useContext(Context).connected

	return (
		<Navbar.Collapse id="navbarScroll">
			<Nav
				className="me-auto my-2 my-lg-0 header-link-container"
				navbarScroll
			>
				{linkArray.map((element, index) => (
					<Link
						key={element.name + index}
						name={element.name}
						link={element.link}
						index={index}
					/>
				))}
			</Nav>
			<Search />
			{!isConnected ? (
				<LinkRouterDom to="/connect" className="me-4">
					<Button
						className="header-btn header-btn-connexion"
						variant="primary"
					>
						Connexion
					</Button>
				</LinkRouterDom>
			) : (
				<Dropdown className="me-4">
					<Dropdown.Toggle
						variant="primary"
						id="dropdown-basic"
						className="header-btn"
					>
						Espace Client
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>
							<LinkRouterDom to="/backoffice">
								Accès au profil
							</LinkRouterDom>
						</Dropdown.Item>
						<Dropdown.Item>
							<span onClick={disconnect}>Déconnexion</span>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			)}
		</Navbar.Collapse>
	)
}

export default Navigation
