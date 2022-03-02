import { Col, Container, Row } from 'react-bootstrap'
import Photos from './components/Photos'
import Description from './components/Description'
import '../../styles/Single.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = (props) => {
	const token = props.token;
	const [data, setData] = useState({})

	const { id } = useParams()

	useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN + `api/property/${id}`)
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setData(response.property)
			})
	}, [id])

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
					<Description data={data} token={token} />
				</Col>
			</Row>
		</Container>
	)
}

export default Single
