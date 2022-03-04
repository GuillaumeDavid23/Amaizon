import { Col, Form, FormControl, FormLabel } from 'react-bootstrap'

const Newsletter = () => {
	return (
		<Col xs="8" lg="2" className="text-center m-3 m-lg-0">
			<Form className="d-flex flex-column">
				<FormLabel className="fw-bold">
					Inscrivez-vous à la newsletter:
				</FormLabel>
				<FormControl type="email" placeholder="name@example.com" />
			</Form>
		</Col>
	)
}

export default Newsletter
