import { Col } from 'react-bootstrap'
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'

const SocialNetworks = () => {
	return (
		<Col lg="2">
			<h4 className="text-decoration-underline">Suivez-nous sur:</h4>
			<div className="d-flex justify-content-evenly">
				<a href="https://www.facebook.com/LaManuFormation">
					<Facebook size={32} />
				</a>
				<a href="https://www.instagram.com/lamanuformation/">
					<Instagram size={32} />
				</a>
				<a href="https://www.linkedin.com/school/la-manu-ecole-superieure-des-metiers-du-numerique/">
					<Linkedin size={32} />
				</a>
			</div>
		</Col>
	)
}

export default SocialNetworks
