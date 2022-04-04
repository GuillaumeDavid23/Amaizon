import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import { Card } from 'react-bootstrap'

const PropertyCard = (props) => {
	const {
		_id,
		imageUrl,
		title,
		description,
		surface,
	} = props.data
	
	return (
		<Card className="mb-5" style={{ width: '100%' }}>
			{imageUrl ? (
				<Card.Img
					variant="top"
					src={process.env.REACT_APP_API_DOMAIN + imageUrl.photo1}
				/>
			) : (
				<Card.Img
					variant="top"
					src={require('../../../assets/announceDefault.png')}
				/>
			)}
			<Card.Body>
				<Card.Title>
					{title} de {surface} m²
				</Card.Title>
				<div>
					<p className="card-text">{description}</p>
				</div>
				<Link
					to={`/single/${_id}`}
					className="d-flex justify-content-center"
				>
					<BtnGeneral
						className="w-50 h-50 mt-5"
						text="Retourner vers l'annonce"
					/>
				</Link>
			</Card.Body>
		</Card>
	)
}

export default PropertyCard
