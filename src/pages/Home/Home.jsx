import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from './components/Banner'
import AnimatedPage from '../../templates/AnimatedPage'
const Home = (props) => {
	return (
		<AnimatedPage>
			<Container fluid className="w-100 h-100 p-0">
				<Banner />
			</Container>
		</AnimatedPage>
	)
}

export default Home
