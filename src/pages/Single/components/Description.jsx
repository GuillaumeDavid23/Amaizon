import BtnGeneral from '../../../templates/BtnGeneral'
import Favorite from '../../../templates/Favorite'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../../App'
import { Link } from 'react-router-dom'

const Description = (props) => {
	const [favExist, setFav] = useState(false)
	const { data } = props
	const token = useContext(Context).authToken
	const isConnected = useContext(Context).connected

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
					setFav(
						resp.userInfos.buyer.wishlist.find(
							(item) => item._id === data._id
						)
					)
				})
		}
	}, [data._id, data, token, isConnected])

	return (
		<div className="description mt-5 mb-5">
			<div className="d-flex justify-content-between">
				<h2 className="d-flex align-items-center">
					{data.title} de {data.surface} m²
				</h2>
				<div>
					<Favorite
						token={token}
						id={data._id}
						default={favExist}
						setFav={setFav}
					/>
				</div>
			</div>
			<small>Ref : {data.propertyRef}</small>
			<h4>Description :</h4>
			<p>{data.description}</p>
			<div className="d-flex justify-content-between align-items-center">
				<h3>Prix : {data.amount?.toLocaleString('FR')} €</h3>
				<Link to={`/takeAppointment/${data._id}`}>
					<BtnGeneral text="Prendre RDV" className="btnRdv" />
				</Link>
			</div>
		</div>
	)
}

export default Description
