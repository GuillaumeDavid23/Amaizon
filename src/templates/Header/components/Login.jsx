// Import Vincent pour Bouton d'accès au form login:
import { Link as LinkRouterDom } from 'react-router-dom'
import { Dropdown, Button } from 'react-bootstrap'
import { BoxArrowInRight, Person } from 'react-bootstrap-icons'

const Login = ({ isConnected }) => {
	// Gestion de la déconnexion:
	const disconnect = () => {
		localStorage.clear()
		window.location.href = process.env.REACT_APP_UI_DOMAIN
	}
	return (
		<div>
			{!isConnected ? (
				<LinkRouterDom to="/connect" className="me-4">
					<Button className="header-btn header-btn-connexion h-auto">
						<div className="d-flex align-items-center">
							<span className="me-2">Connexion</span>
							<BoxArrowInRight size={25} />
						</div>
					</Button>
				</LinkRouterDom>
			) : (
				<Dropdown className="me-4">
					<Dropdown.Toggle
						variant="primary"
						id="dropdown-basic"
						className="header-btn"
					>
						<div className="d-flex align-items-center">
							<span className="me-2">Espace Client</span>
							<Person size={25} />
						</div>
					</Dropdown.Toggle>
					<Dropdown.Menu align="center">
						<Dropdown.Item href="/backoffice">
								<span>Accès au profil</span> 
						</Dropdown.Item>
						<Dropdown.Item>
							<span onClick={disconnect}>Déconnexion</span>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			)}
		</div>
	)
}

export default Login
