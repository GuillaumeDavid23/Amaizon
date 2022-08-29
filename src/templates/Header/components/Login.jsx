// Import Vincent pour Bouton d'accès au form login:
import { Link as LinkRouterDom } from 'react-router-dom'
import { Dropdown, Button } from 'react-bootstrap'
import { BsBoxArrowInRight, BsPerson } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'

const Login = ({ isConnected }) => {
	// Gestion de la déconnexion:
	const disconnect = () => {
		localStorage.clear()
		window.location.href = process.env.REACT_APP_UI_DOMAIN
	}
	return (
		<div>
			{!isConnected ? (
				<div>
					<LinkRouterDom to="/register" className="me-lg-4">
						<Button className="header-btn header-btn-connexion h-auto">
							<div className="d-flex align-items-center">
								<span className="me-2">Inscription</span>
								<AiOutlineUserAdd size={25} />
							</div>
						</Button>
					</LinkRouterDom>
					<LinkRouterDom to="/connect" className="me-lg-4">
						<Button className="header-btn header-btn-connexion h-auto">
							<div className="d-flex align-items-center">
								<span className="me-2">Connexion</span>
								<BsBoxArrowInRight size={25} />
							</div>
						</Button>
					</LinkRouterDom>
				</div>
			) : (
				<Dropdown className="me-lg-4">
					<Dropdown.Toggle
						variant="primary"
						id="dropdown-basic"
						className="header-btn"
					>
						<div className="d-flex align-items-center">
							<span className="me-2">Espace Client</span>
							<BsPerson size={25} />
						</div>
					</Dropdown.Toggle>
					<Dropdown.Menu align="center" style={{ marginTop: 10 }}>
						<Dropdown.Item>
							<LinkRouterDom to="/backoffice">
								<span>Accès au profil</span>
							</LinkRouterDom>
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
