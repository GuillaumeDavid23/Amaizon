import { Col, Container, Row } from 'react-bootstrap'
import Photos from './components/Photos'
import Description from './components/Description'
import '../../styles/Single.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
	const [data, setData] = useState({})

	const { id } = useParams()

	useEffect(() => {
		fetch(window.env.API_DOMAIN + `api/property/${id}`)
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setData(response.property)
			})
	}, [])

	return (
		<Container className="mt-5 mb-5">
			<Row className="justify-content-between align-items-center">
				<Col xs="12" lg="6" className="">
					{data.imageUrl ? (
						<Photos data={data.imageUrl} />
					) : (
						<Photos data={null} />
					)}
				</Col>
				<Col xs="12" lg="5" className="">
					<Description data={data} exist={false}/>
				</Col>
			</Row>
		</Container>
	)
}

export default Single
