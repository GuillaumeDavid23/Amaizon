import { Link } from 'react-router-dom'

const NavFooter = () => {
	return (
		<ul className="d-flex flex-column justify-content-around">
			<li>
				<Link to="/">Accueil</Link>
			</li>
			<li>
				<Link to="/aboutus">A propos</Link>
			</li>
			<li>
				<Link to="/contactus">Contact</Link>
			</li>
		</ul>
	)
}

export default NavFooter
