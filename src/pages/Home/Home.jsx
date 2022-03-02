import Img from '../../templates/Img'
import banner from '../../assets/real-estate-paper-finance-budgeting-concept.jpg'
import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Home = (props) => {
	const token = props.token
	const [properties, setProperties] = useState([])

	useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN + 'api/property')
			.then((response) => {
				return response.json()
			})
			.then((response) => setProperties(response.properties))
	}, [])

	return (
		<Container fluid>
			<Img
				idValue="homeBanner"
				srcValue={banner}
				altValue="Bannière Accueil Amaizon"
			/>
			<Filters setProperties={setProperties} />
			<Row className="justify-content-center justify-content-lg-evenly w-100 m-0">
				{properties.map((property) => {
					return (
						<Col
							xs="10"
							md="5"
							lg="3"
							key={property._id}
							className="d-flex justify-content-center"
						>
							<HomeCards propertyDatas={property} token={token} />
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}

export default Home
