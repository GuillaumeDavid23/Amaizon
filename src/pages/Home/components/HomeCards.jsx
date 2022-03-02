import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import Img from '../../../templates/Img'
import { useEffect, useState } from 'react'
import Favorite from '../../../templates/Favorite'

const HomeCards = (props) => {
	const { _id, imageUrl, title, description, amount } = props.propertyDatas
	const token = props.token

	const [favExist, setFav] = useState(false)

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
		}
		fetch('http://localhost:8080/api/user/check/' + token, requestOptions)
			.then(function (response) {
				return response.json()
			})
			.then(function (resp) {
				const userData = resp.data
				setFav(userData.buyer.wishlist.includes(_id))
			})
	}, [_id, token])
	return (
		<div className="card">
			<Img
				srcValue={window.env.API_DOMAIN + imageUrl.photo1}
				classList="card-img-top"
				altValue={`Vignette de ${title}`}
			/>
			<div className='fav'>
				<Favorite
					token={token}
					id={_id}
					default={favExist}
					setFav={setFav}
				/>
			</div>
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<h5 className="card-title">{title}</h5>
					
				</div>
				<p className="card-text">{description}</p>
				<div className="d-flex justify-content-around">
					<span className="price">{amount} €</span>
					<Link to={`/single/${_id}`}>
						<BtnGeneral text="Voir l'annonce" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomeCards
