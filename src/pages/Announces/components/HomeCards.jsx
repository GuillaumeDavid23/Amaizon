import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../../App'
import Favorite from '../../../templates/Favorite'
import { Card } from 'react-bootstrap'
import { BsBorderAll } from 'react-icons/bs'
import { MdLocationSearching, MdArchitecture } from 'react-icons/md'



const HomeCards = (props) => {
	const {
		_id,
		imageUrl,
		title,
		description,
		amount,
		surface,
		roomNumber,
		location,
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
					setFav(resp.userInfos.buyer.wishlist.find(item=>item._id === _id))
				})
		}
	}, [_id, isConnected, token])

	return (
		<Card className="m-3 mb-5" style={{ width: '100%' }} id={_id}>
			<Card.Img
				variant="top"
				src={process.env.REACT_APP_API_DOMAIN + imageUrl?.photo1}
				alt={"Super photo 1"}
				className="h-100"
				onError={}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title>{title}</Card.Title>
				<div>
					<p className="card-text">{description}</p>
					<div className="text-center">
						<div className="price ">
							{amount?.toLocaleString('FR')} €{' '}
							<small className="location text-secondary">
								{transactionType === 'Location' ? '/ Mois' : ''}
							</small>
						</div>
						<div className="d-flex justify-content-evenly mt-2">
							<div className="d-flex flex-column align-items-center fw-bold">
								<BsBorderAll size={20} />
								{roomNumber} pièce(s)
							</div>
							<div className="d-flex flex-column align-items-center fw-bold">
								<MdLocationSearching size={20} />
								{location ? location[0] : ''}
							</div>
							<div className="d-flex flex-column align-items-center fw-bold">
								<MdArchitecture size={20} />
								{surface} m²
							</div>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-between align-items-center">
					<div className="btnFav">
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
