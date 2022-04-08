import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import { Card } from 'react-bootstrap'

const PropertyCard = (props) => {
	const { data } = props

	return (
		<Card className="mb-5" style={{ width: '100%' }}>
			{data?.imageUrl ? (
				<Card.Img
					variant="top"
					src={
						process.env.REACT_APP_API_DOMAIN +
						data?.imageUrl?.photo1
					}
					alt="Image de bien immobilier"
				/>
			) : (
				<Card.Img
					variant="top"
					src={require('../../../assets/announceDefault.png')}
					alt="Image par défaut de bien immobilier"
				/>
			)}
			<Card.Body>
				<Card.Title>
					{data ? (
						<>
							{data?.title} de {data?.surface} m²
						</>
					) : (
						<></>
					)}
				</Card.Title>
				<div>
					<p className="card-text">{data?.description}</p>
				</div>
				<Link
					to={`/single/${data?._id}`}
					className={`d-flex justify-content-center`}
					style={!data?{pointerEvents:'none'}:{}}
				>
					<BtnGeneral
						className="w-50 h-50 mt-5"
						text="Retourner vers l'annonce"
						disabled={!data}
					/>
				</Link>
			</Card.Body>
		</Card>
	)
}

export default PropertyCard
