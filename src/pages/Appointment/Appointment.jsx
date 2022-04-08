import { Col, Container, Row } from 'react-bootstrap'
import PropertyCard from './components/PropertyCard'
import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import AppointmentForm from './components/AppointmentForm'
import '../../styles/Appointment.css'
import AnimatedPage from '../../templates/AnimatedPage'



const Appointment = () => {
	const [isAPIOK, setIsAPIOK] = useState(true)
	const [property, setProperty] = useState()
	const { id } = useParams()

	useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN + `api/property/${id}`)
			.then((response) => {
				console.log(response)
				if(!response.ok){
					setIsAPIOK(false)
				}
				return response.json()
			})
			.then((response) => {
				setProperty(response.property)
			}).catch(err=>{
				console.error("Appointement::FetchProperty")
				console.error(err)
				setIsAPIOK(false)
			})
	}, [id])

	return (
		isAPIOK?(
			<AnimatedPage>
				<Container>
					<Row className="mt-5 mb-5 justify-content-evenly flex-column-reverse flex-lg-row">
						<Col xs="12" lg="4" className='mt-5 mt-lg-0'>
							<PropertyCard data={property} />
						</Col>
						<Col className="linear mb-4 d-none d-lg-block" xs="8" lg="1"></Col>
						<Col xs="12" lg="5">
							<h2 className='text-center mb-5'>Prise de rendez-vous</h2>
	
							<AppointmentForm idProperty={id} />
						</Col>
					</Row>
				</Container>
			</AnimatedPage>
		):(
			<Navigate to='/'/>
		))
	
}

export default Appointment
