import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const NavFooter = () => {
	return (
		<Col xs="6" lg="2">
			<ul className="d-flex flex-column justify-content-around">
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li className="my-md-3">
					<Link to="/aboutus">A propos</Link>
				</li>
				<li>
					<Link to="/contactus">Contact</Link>
				</li>
			</ul>
		</Col>
	)
}

export default NavFooter
