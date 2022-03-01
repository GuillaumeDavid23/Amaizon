import '../../styles/Footer.css'
import LegalsFooter from './components/LegalsFooter'
import NavFooter from './components/NavFooter'
import Newsletter from './components/Newsletter'
import Credits from './components/Credits'
import ContactInfos from './components/ContactInfos'
import SocialNetworks from './components/SocialNetworks'
import { Row } from 'react-bootstrap'


const Footer = () => {
	return (
		<footer>
			<Row className="justify-content-center justify-content-lg-evenly w-100">
				<LegalsFooter />
				<NavFooter />
				<Newsletter />
				<ContactInfos />
				<SocialNetworks />
				<Credits />
			</Row>
		</footer>
	)
}

export default Footer
