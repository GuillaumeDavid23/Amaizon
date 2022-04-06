import ContactForm from './components/ContactForm'
import Img from '../../templates/Img'
import contactBanner from '../../assets/img-contact.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
	return (
		<Container>
			<Row className="justify-content-around mt-5 ">
				<ContactForm />
				<Col xs="12" lg="6">
					<Img
						classList="img-fluid"
						srcValue={contactBanner}
						altValue="Illustration page de contact"
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Contact
