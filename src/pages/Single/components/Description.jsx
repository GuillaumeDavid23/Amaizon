import BtnGeneral from '../../../templates/BtnGeneral'
import Favorite from '../../../templates/Favorite'
import { useEffect, useState } from 'react'

const Description = (props) => {
	const [favExist, setFav] = useState(false)
    const {data, token} = props
    
    useEffect(() => { 
        const requestOptions = {
            method: 'GET',
        }
        fetch(
            'http://localhost:8080/api/user/check/' + token,
            requestOptions
        )
            .then(function (response) {
                return response.json()
            })
            .then(function (resp) {
                const userData = resp.data
                setFav(userData.buyer.wishlist.includes(data._id))
            })
    }, [data._id, data, token])
	return (
		<div className="description">
			<div className="d-flex justify-content-between">
				<h2 className="d-flex align-items-center">
					{data.title} de {data.surface} m²
				</h2>
				<div>
					<Favorite token={token} id={data._id} default={favExist} setFav={setFav} />
				</div>
			</div>
			<small>Ref : {data.propertyRef}</small>
			<h4>Description :</h4>
			<p>{data.description}</p>
			<div className="d-flex justify-content-between align-items-center">
				<h3>Prix : {data.amount} €</h3>
				<BtnGeneral text="Prendre RDV" className="btnRdv" />
			</div>
		</div>
	)
}

export default Description
