import { Navbar, Nav } from 'react-bootstrap'

//search form components
import Search from './Form'

//navigation link component
import Link from './Link'

// Import Vincent pour Bouton d'accès au form login:
import BtnGeneral from '../../BtnGeneral'
import { Link as LinkRouterDom } from 'react-router-dom'

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
					<BtnGeneral text="Connexion" />
				</LinkRouterDom>
			) : (
				''
			)}
		</Navbar.Collapse>
	)
}

export default Navigation
