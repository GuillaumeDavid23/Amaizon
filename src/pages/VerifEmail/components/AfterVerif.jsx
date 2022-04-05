import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AfterVerif = () => {
	return (
		<Container
			className="bo_subcontainer w-50"
			style={{ borderRadius: '30px' }}
		>
			<p className="text-center">
				Félicitations, vous êtes désormais vérifié !
			</p>
			<p className="text-center">
				N'hésitez pas à nous contacter via la page de Contact !
			</p>
			<Link to="/" className="d-flex justify-content-center mt-3">
				<Button className="btn-general" style={{ width: '200px' }}>
					Retour à la page d'accueil
				</Button>
			</Link>
		</Container>
	)
}

export default AfterVerif
