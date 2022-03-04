import { Col, Container, Row } from 'react-bootstrap'
import PropertyCard from './components/PropertyCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppointmentForm from './components/AppointmentForm'
import '../../styles/Appointment.css'


const Appointment = () => {
	const [properties, setProperties] = useState([])
	const { id } = useParams()

	useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN + `api/property/${id}`)
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setProperties(response.property)
			})
	}, [id])
	return (
		<Container>
			<Row className="mt-5 mb-5 justify-content-evenly ">
				<Col xs="12" lg="5">
					<PropertyCard data={properties} />
				</Col>
				<Col className="linear mb-4" xs="8" lg="1"></Col>
				<Col xs="12" lg="5">
					<h2 className='text-center mb-5'>Prise de rendez-vous</h2>

					<AppointmentForm idProperty={id} />
				</Col>
			</Row>
		</Container>
	)
}

export default Appointment
