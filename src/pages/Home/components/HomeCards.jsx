import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import { useEffect, useState } from 'react'
import Favorite from '../../../templates/Favorite'
import { Card } from 'react-bootstrap'

const HomeCards = (props) => {
	const {
		_id,
		imageUrl,
		title,
		description,
		amount,
		surface,
		transactionType,
	} = props.propertyDatas
	const token = props.token
	const [favExist, setFav] = useState(false)

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
		}
		fetch(
			process.env.REACT_APP_API_DOMAIN + 'api/user/check/' + token,
			requestOptions
		)
			.then(function (response) {
				return response.json()
			})
			.then(function (resp) {
				const userData = resp.data
				setFav(userData.buyer.wishlist.includes(_id))
			})
	}, [_id, token])
	return (
		<Card className="mb-5" style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				src={process.env.REACT_APP_API_DOMAIN + imageUrl.photo1}
			/>
			<Card.Body>
				<Card.Title>
					{title} de {surface} m²
				</Card.Title>
				<Card.Text>
					<p className="card-text">{description}</p>
					<div className="text-center">
						<span className="price ">
							{amount} €{' '}
							<small className="location">
								{transactionType === 'Location' ? '/ Mois' : ''}
							</small>
						</span>
					</div>
				</Card.Text>
				<Link
					to={`/single/${_id}`}
					className="d-flex justify-content-center"
				>
					<BtnGeneral className="w-75" text="Voir l'annonce" />
				</Link>
				<div className="d-flex justify-content-center">
					<Favorite
						token={token}
						id={_id}
						default={favExist}
						setFav={setFav}
					/>
				</div>
			</Card.Body>
		</Card>
	)
}

export default HomeCards
