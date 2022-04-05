import { Container, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../../../App'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router-dom'

const BeforeVerif = () => {
	// console.log(useContext(Context))
	let email = useContext(Context).userInfos?.email
	if (email === undefined) {
		email = jwtDecode(
			JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH_AMAIZON'))
		).user.email
	}

	return (
		<Container
			className="bo_subcontainer w-75"
			style={{ borderRadius: '30px' }}
		>
			<p className="text-center">
				Vous devez vérifier votre email pour pouvoir vous connecter à
				notre site !
			</p>
			<p className="text-center">
				Rendez-vous sur votre boite mail{' '}
				<span style={{ fontSize: '1em', color: 'black' }}>{email}</span>{' '}
				et cliquer sur le lien !
			</p>
			<Link to="/" className="d-flex justify-content-center mt-3">
				<Button className="btn-general" style={{ width: '200px' }}>
					Retour à la page d'accueil
				</Button>
			</Link>
		</Container>
	)
}

export default BeforeVerif
