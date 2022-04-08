import { Col, Container, Row } from 'react-bootstrap'
import Photos from './components/Photos'
import Description from './components/Description'
import '../../styles/Single.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsBorderAll } from 'react-icons/bs'
import { MdLocationSearching, MdArchitecture } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BtnGeneral from '../../templates/BtnGeneral'
import AnimatedPage from '../../templates/AnimatedPage'


const Single = () => {
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
			.catch((error) => {
				console.log(error)
			})
	}, [id])

	return (
		<AnimatedPage>
			<Container className="mt-4 mb-4">
				<Link
					to={{ pathname: '/', hash: '#'+id }}
					className="d-flex justify-content-center w-25"
				>
					<BtnGeneral
						className="w-75 h-50"
						text="<< Retour"
					/>
				</Link>
				<Row className="justify-content-evenly align-items-center mt-4">
					<Col xs="12" lg="5" className="d-flex flex-column">
						{data.imageUrl ? (
							<Photos data={data.imageUrl} />
						) : (
							<Photos data={null} />
						)}
						<div className="mt-5 d-flex justify-content-evenly">
							<div className="d-flex flex-column align-items-center fw-bold">
								<MdArchitecture size={40} />
								{data.surface} m²
							</div>
							<div className="d-flex flex-column align-items-center fw-bold">
								<BsBorderAll size={40} />
								{data.roomNumber} pièce(s)
							</div>
							<div className="d-flex flex-column align-items-center fw-bold">
								<MdLocationSearching size={40} />
								{data.location}
							</div>
						</div>
					</Col>
					<Col xs="12" lg="5" className="">
						<Description data={data} />
					</Col>
				</Row>
			</Container>
		</AnimatedPage>
	)
}

export default Single
