import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../../App'
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
	const [favExist, setFav] = useState(false)
	const token = useContext(Context).authToken
	const isConnected = useContext(Context).connected

	useEffect(() => {
		if (isConnected) {
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
		}
	}, [_id, token, isConnected])
	
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
				<div>
					<p className="card-text">{description}</p>
					<div className="text-center">
						<span className="price ">
							{amount} €{' '}
							<small className="location text-secondary">
								{transactionType === 'Location' ? '/ Mois' : ''}
							</small>
						</span>
					</div>
				</div>

				<div className="d-flex justify-content-center align-items-center">
					<Link
						to={`/single/${_id}`}
						className="d-flex justify-content-center"
					>
						<BtnGeneral
							className="w-100 h-50"
							text="Voir l'annonce"
						/>
					</Link>
					<Favorite id={_id} default={favExist} setFav={setFav} />
				</div>
			</Card.Body>
		</Card>
	)
}

export default HomeCards
