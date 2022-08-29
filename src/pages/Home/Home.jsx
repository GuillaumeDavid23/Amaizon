import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from './components/Banner'
import AnimatedPage from '../../templates/AnimatedPage'
const Home = (props) => {
	const [properties, setProperties] = useState([])
	
	//Redirect to last visted announce in the list if exist
	// const locate = window.location.hash.substr(1);
	// if(locate){
	// 	setTimeout(() => {
	// 		window.location.href = '#' + locate
	// 	}, 300)
	// }

	return (
		<AnimatedPage>
			<Container fluid className="w-100 p-0">
				<Banner />
				<Filters setProperties={setProperties} properties={properties} />
				<Row className="justify-content-center justify-content-lg-center container">
					{properties.map((property) => {
						return (
							<Col
								xs="12"
								md="4"
								lg="3"
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
		</AnimatedPage>
	)
}

export default Home
