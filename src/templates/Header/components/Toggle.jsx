import { Navbar } from 'react-bootstrap'
import React, { useState } from 'react'

//This components is for Create mobile toggler
const Toggle = () => {
	//useState for animate toggler (rotate)
	const [style, setStyle] = useState('header-toggle-base')

	//Event function for animate toggler (rotate)
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
	return (
		<Navbar.Toggle
			aria-controls="navbarScroll"
			className={`header-toggle ${style}`}
			onClick={rotateToggle}
		>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar mb-1"></span>
		</Navbar.Toggle>
	)
}

export default Toggle
