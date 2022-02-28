import '../styles/Header.css'
import logo from '../assets/logo.png'
import logoFull from '../assets/logoFull.png'
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
function NavbarCustom() {
	const [style, setStyle] = useState('header-toggle-base')
	const rotateToggle = () => {
		switch (style) {
			case 'header-toggle-base':
				setStyle('header-toggle-rotate')
				break
			case 'header-toggle-rotate':
				setStyle('header-toggle-base')
				break
			default:
				setStyle('header-toggle-base')
				break
		}
	}
	const linkArray = [
		{
			name: 'Accueil',
			link: '#',
		},
		{ name: 'A propos', link: '#' },
		{ name: 'Contact', link: '#' },
	]
	return (
		<Navbar bg="light" expand="lg" className="header-container p-0">
			<Container fluid className="header-container">
				<Navbar.Brand href="#" className="header-logo-container">
					<img src={logo} className="header-logo" alt="" />
					<img src={logoFull} className="header-logo-full" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="navbarScroll"
					className={`header-toggle ${style}`}
					onClick={rotateToggle}
				>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar mb-1"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0 header-link-container"
						navbarScroll
					>
						{linkArray.map((element, index) => (
							<Nav.Link
								href={element.link}
								className="header-text"
							>
								{element.name}
							</Nav.Link>
						))}
					</Nav>
					<Form className="d-flex header-form">
						<FormControl
							type="search"
							placeholder="Effectuez votre recherche..."
							className="me-2 header-search-input"
							aria-label="Search"
						/>
						<Button className="header-btn" variant="primary">
							GO
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

function Header() {
	return <NavbarCustom />
}

export default Header
