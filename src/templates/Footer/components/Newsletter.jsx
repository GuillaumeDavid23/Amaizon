import { Form, FormControl, FormLabel } from 'react-bootstrap'


const Newsletter = () => {
	return (
		<Form className="d-flex flex-column">
			<FormLabel className='fw-bold'>Inscrivez-vous à la newsletters</FormLabel>
			<FormControl type="email" placeholder="name@example.com" />
		</Form>
	)
}

export default Newsletter
