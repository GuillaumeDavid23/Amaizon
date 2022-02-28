import logo from '../../../assets/logo.png'
import logoFull from '../../../assets/logoFull.png'
import { Navbar } from 'react-bootstrap'
const Brand = () => {
	return (
		<Navbar.Brand href="#" className="header-logo-container">
			<img src={logo} className="header-logo" alt="" />
			<img src={logoFull} className="header-logo-full" alt="" />
		</Navbar.Brand>
	)
}

export default Brand
