import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../../../App'
import jwtDecode from 'jwt-decode'

const BeforeVerif = () => {
	let email = useContext(Context).userInfos.email
	if (email === undefined) {
		email = jwtDecode(
			JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH_AMAIZON'))
		).user.email
	}

	return (
		<Container
			className="bo_subcontainer w-50"
			style={{ borderRadius: '30px' }}
		>
			<p className="text-center">Vous devez vérifier votre email !</p>
			<p className="text-center">
				Rendez-vous sur votre boite mail{' '}
				<span style={{ color: 'black' }}>{email}</span> et cliquer sur
				le lien !
			</p>
		</Container>
	)
}

export default BeforeVerif
