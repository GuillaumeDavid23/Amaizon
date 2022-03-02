import { Col, Container, Row } from "react-bootstrap"
import Photos from "./components/Photos"
import Description from "./components/Description"
import '../../styles/Single.css'
import { useEffect, useState } from "react"

const Single = () => {
	const [data, setData] = useState({})
	
	useEffect(() => {fetch('http://127.0.0.1:8080/api/property/621dfe04c7ecb9dc4762d5f1')
		.then((response) => {
			return response.json()
		})
		.then((response) => {
			setData(response.property)
		})}, [])

	return (
		<Container className="mt-5 mb-5">
			<Row className="justify-content-between align-items-center">
				<Col xs="12" lg="6" className="">
					{data.imageUrl ? (<Photos data={data.imageUrl}/>) : (<Photos data={null}/>)}
				</Col>
				<Col xs="12" lg="5" className="">
					<Description data={data} exist={false}/>
				</Col>
			</Row>
		</Container>
	)
}

export default Single
