import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SocialNetworks = () => {
	return (
		<div>
			<h4 className="text-decoration-underline">Suivez-nous sur:</h4>
			<div className="d-flex">
				<a href="https://www.facebook.com/LaManuFormation">
					<FontAwesomeIcon icon={faFacebook} size="xl" />
				</a>
				<a href="https://www.instagram.com/lamanuformation/">
					<FontAwesomeIcon icon={faInstagram} size="xl" />
				</a>
				<a href="https://www.linkedin.com/school/la-manu-ecole-superieure-des-metiers-du-numerique/">
					<FontAwesomeIcon icon={faLinkedin} size="xl" />
				</a>
			</div>
		</div>
	)
}

export default SocialNetworks
