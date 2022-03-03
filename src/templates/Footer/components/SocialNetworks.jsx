import { Col } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const SocialNetworks = () => {
	return (
		<Col xs="6" md="4" lg="2">
			<h4 className="text-decoration-underline">Suivez-nous sur:</h4>
			<div className="d-flex justify-content-center">
				<a href="https://www.facebook.com/LaManuFormation">
					<BsFacebook size={32} />
				</a>
				<a
					href="https://www.instagram.com/lamanuformation/"
					className="mx-3"
				>
					<BsInstagram size={32} />
				</a>
				<a href="https://www.linkedin.com/school/la-manu-ecole-superieure-des-metiers-du-numerique/">
					<BsLinkedin size={32} />
				</a>
			</div>
		</Col>
	)
}

export default SocialNetworks
