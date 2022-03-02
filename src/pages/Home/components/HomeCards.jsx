import { useState } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import BtnGeneral from '../../../templates/BtnGeneral'
import Img from '../../../templates/Img'

const HomeCards = ({ propertyDatas }) => {
	const { _id, imageUrl, title, description, amount } = propertyDatas

	const [isFavorite, setFavorite] = useState(false)

	const handleFav = (e) => {
		setFavorite(!isFavorite ? true : false)
	}

	return (
		<div className="card">
			<Img
				srcValue={'http://localhost:5000/' + imageUrl.photo1}
				classList="card-img-top"
				altValue={`Vignette de ${title}`}
			/>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<h5 className="card-title">{title}</h5>
					<div className="fav" onClick={(e) => handleFav(e)}>
						{!isFavorite ? (
							<Heart size={32} color={'red'} />
						) : (
							<HeartFill size={32} color={'red'} />
						)}
					</div>
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
