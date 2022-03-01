import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'


const LegalsFooter = () => {
	return (
		<Col xs="6" lg="2">
			<ul className="d-flex flex-column justify-content-around">
				<li>
					<Link to="/legals">Mentions légales</Link>
				</li>
				<li>
					<Link to="/legals">Conditions générales d'utilisation</Link>
				</li>
				<li>
					<Link to="legals">Conditions générales de vente</Link>
				</li>
			</ul>
		</Col>
	)
}

export default LegalsFooter
