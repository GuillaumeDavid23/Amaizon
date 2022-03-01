import { Navbar, Nav } from 'react-bootstrap'

//search form components
import Search from './Form'

//navigation link component
import Link from './Link'

// This components is for create navigation link and forms
const Navigation = () => {
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
					<Link name={element.name} link={element.link} index={index}/>
				))}
			</Nav>
			<Search />
		</Navbar.Collapse>
	)
}

export default Navigation
