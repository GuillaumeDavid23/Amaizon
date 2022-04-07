import { Navbar, Nav } from 'react-bootstrap'

//navigation link component
import LinkElement from './Link'
//Login/profil button component
import Login from './Login'

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

	let isConnected = useContext(Context).connected

	return (
		<Navbar.Collapse id="navbarScroll" className="text-center">
			<Nav
				className="me-auto my-2 my-lg-0 header-link-container"
				navbarScroll
			>
				{linkArray.map((element, index) => (
					<LinkElement
						key={element.name + index}
						name={element.name}
						link={element.link}
						index={index}
					/>
				))}
			</Nav>
			<Login isConnected={isConnected} />
		</Navbar.Collapse>
	)
}

export default Navigation
