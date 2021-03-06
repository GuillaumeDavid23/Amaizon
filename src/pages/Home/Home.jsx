import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from './components/Banner'

const Home = (props) => {
	const [properties, setProperties] = useState([])

	useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN + 'api/property')
			.then((response) => {
				return response.json()
			})
			.then((response) => setProperties(response.properties))
	}, [])
	const locate = window.location.hash.substr(1);
	if(locate){
		setTimeout(() => (window.location.href = '#' + locate), 300)
	}

	return (
		<Container fluid className="w-100 p-0">
			<Banner />
			<Filters setProperties={setProperties} />
			<Row className="justify-content-center justify-content-lg-center">
				{properties.map((property) => {
					return (
						<Col
							xs="12"
							md="7"
							lg="4"
							key={property._id}
							className="d-flex justify-content-center"
						>
							<HomeCards
								propertyDatas={property}
								setUserInfos={props.setUserInfos}
							/>
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}

export default Home
