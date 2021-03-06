import '../../styles/Header.css'
import Brand from './components/Brand'
import Toggle from './components/Toggle'
import Navigation from './components/Navigation'
import { Navbar, Container } from 'react-bootstrap'

//This component is for create Header
function Header() {
	return (
		<Navbar
			bg="light"
			expand="lg"
			className="header-container p-0 sticky-lg-top"
		>
			<Container fluid className="header-container">
				<Brand />
				<Toggle />
				<Navigation />
			</Container>
		</Navbar>
	)
}

export default Header
