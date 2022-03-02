import '../../styles/Header.css'
import Brand from './components/Brand'
import Toggle from './components/Toggle'
import Navigation from './components/Navigation'
import { Navbar, Container } from 'react-bootstrap'

//This component is for create Header
function Header({ isConnected }) {
	return (
		<Navbar bg="light" expand="lg" className="header-container p-0">
			<Container fluid className="header-container">
				<Brand />
				<Toggle />
				<Navigation isConnected={isConnected} />
			</Container>
		</Navbar>
	)
}

export default Header
