import { Navbar, Nav } from 'react-bootstrap'

//search form components
import Search from './Form'

//navigation link component
import Link from './Link'

// Import Vincent pour Bouton d'accès au form login:
import { Link as LinkRouterDom } from 'react-router-dom'
import { Dropdown, Button } from 'react-bootstrap'

// This components is for create navigation link and forms
const Navigation = ({ isConnected }) => {
	//Array for create navigation link
	const linkArray = [
		{
			name: 'Accueil',
			link: '#',
		},
		{ name: 'A propos', link: '#' },
		{ name: 'Contact', link: '#' },
	]

	// Gestion de la déconnexion:
	const disconnect = () => {
		localStorage.clear()
		window.location.href = window.env.UI_DOMAIN
	}

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
				<LinkRouterDom to="/connect">
					<Button
						className="header-btn header-btn-connexion"
						variant="primary"
					>
						Connexion
					</Button>
				</LinkRouterDom>
			) : (
				<Dropdown>
					<Dropdown.Toggle
						variant="primary"
						id="dropdown-basic"
						className="header-btn"
					>
						Vincent Mancheron
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
