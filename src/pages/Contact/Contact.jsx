import ContactForm from './components/ContactForm'
import Img from '../../templates/Img'
import contactBanner from '../../assets/img-contact.jpg'

const Contact = () => {
	return (
		<div className="d-flex justify-content-around">
			<ContactForm />
			<Img
				classList="d-none d-md-block w-50"
				srcValue={contactBanner}
				altValue="Illustration page de contact"
			/>
		</div>
	)
}

export default Contact
