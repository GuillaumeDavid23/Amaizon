import '../../styles/Header.css'
import Brand from './components/Brand'
import Toggle from './components/Toggle'
import Collapse from './components/Collapse'
import {
	Navbar,
	Container,
} from 'react-bootstrap'

function Header() {
	return (
		<Navbar bg="light" expand="lg" className="header-container p-0">
			<Container fluid className="header-container">
				<Brand />
				<Toggle />
				<Collapse />
			</Container>
		</Navbar>
	)
}

export default Header
