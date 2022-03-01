import '../../styles/Footer.css'
import LegalsFooter from './components/LegalsFooter'
import NavFooter from './components/NavFooter'
import Newsletter from './components/Newsletter'
import Credits from './components/Credits'
import ContactInfos from './components/ContactInfos'
import SocialNetworks from './components/SocialNetworks'

const Footer = () => {
	return (
		<footer className="d-flex justify-content-evenly">
			<LegalsFooter />
			<NavFooter />
			<Newsletter />
			<Credits />
			<ContactInfos />
			<SocialNetworks />
		</footer>
	)
}

export default Footer
