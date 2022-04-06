import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from './components/Banner'

const Home = (props) => {
	const [properties, setProperties] = useState([])

	
	const locate = window.location.hash.substr(1);
	if(locate){
		setTimeout(() => (window.location.href = '#' + locate), 300)
	}

	return (
		<Container fluid className="w-100 p-0">
			<Banner />
			<Filters setProperties={setProperties} properties={properties} />
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
