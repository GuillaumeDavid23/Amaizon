import ContactForm from './components/ContactForm'
import Img from '../../templates/Img'
import contactBanner from '../../assets/img-contact.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import AnimatedPage from '../../templates/AnimatedPage'

const Contact = () => {
	return (
		<AnimatedPage>
			<Container>
				<Row className="justify-content-around align-items-center mt-5 maxPage">
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
		</AnimatedPage>
	)
}

export default Contact
