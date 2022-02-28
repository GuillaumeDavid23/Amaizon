import { Link } from 'react-router-dom'

const LegalsFooter = () => {
	return (
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
	)
}

export default LegalsFooter
