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
	const isConnected = useContext(Context).connected

	const token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH_AMAIZON'))

	useEffect(() => {
		if (isConnected) {
			const requestOptions = {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}
			fetch(
				process.env.REACT_APP_API_DOMAIN + 'api/user/checkBearer/',

				requestOptions
			)
				.then(function (response) {
					return response.json()
				})
				.then(function (resp) {
					setFav(resp.userInfos.buyer.wishlist.includes(_id))
				})
		}
	}, [_id, isConnected, token])

	return (
		<Card className="mb-5" style={{ width: '70%' }} id={_id}>
			<Card.Img
				variant="top"
				src={process.env.REACT_APP_API_DOMAIN + imageUrl.photo1}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title>
					{title} de {surface} m²
				</Card.Title>
				<div>
					<p className="card-text">{description}</p>
					<div className="text-center">
						<span className="price ">
							{amount?.toLocaleString('FR')} €{' '}
							<small className="location text-secondary">
								{transactionType === 'Location' ? '/ Mois' : ''}
							</small>
						</span>
					</div>
				</div>

				<div className="d-flex justify-content-between align-items-center">
					<div className='btnFav'>
						<Favorite id={_id} default={favExist} setFav={setFav} />
					</div>
					<Link
						to={`/single/${_id}`}
						className="d-flex justify-content-center"
					>
						<BtnGeneral
							className="w-100 h-50"
							text="Voir l'annonce"
						/>
					</Link>
				</div>
			</Card.Body>
		</Card>
	)
}

export default HomeCards
