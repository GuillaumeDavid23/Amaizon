import BtnGeneral from '../../../templates/BtnGeneral'
import Favorite from '../../../templates/Favorite'
import { useEffect, useState } from 'react'

const Description = (props) => {
	const [favExist, setFav] = useState(false)
    const {data} = props
    
    useEffect(() => { 
        const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImJ1eWVyIjp7Indpc2hsaXN0IjpbXSwiYnVkZ2V0TWluIjoxMDAwMDAsImJ1ZGdldE1heCI6MTUwMDAwLCJjaXR5IjoiQW1pZW5zIiwic3VyZmFjZU1pbiI6NTAsInN1cmZhY2VNYXgiOjEyMCwidHlwZSI6Ik1haXNvbiJ9LCJfaWQiOiI2MjBlMTcwNTkwNmY5YjFiYzFhZGY3NjgiLCJmaXJzdG5hbWUiOiJIZW5yeSIsImxhc3RuYW1lIjoiR3VpZSIsImVtYWlsIjoiaGVucnlAdGVzdC5mciIsInBhc3N3b3JkIjoiJDJiJDEwJHlMakM1NjVDTERrcGNmRmt5bnRFRGVkdm9rb05WWC94bGVMV0xTSEpxaVQ4MS9xelVZRC8yIiwibmV3c2xldHRlciI6dHJ1ZSwic3RhdHVzIjp0cnVlLCJyZWYiOiIyNTY0R0Q1NjU2IiwiY3JlYXRlZEF0IjoiMjAyMi0wMi0xN1QwOTozNjowNS4yNjVaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0wMlQwOTo0NTozNS4wNjRaIiwiX192IjowfSwiaWF0IjoxNjQ2MjE0MzgwLCJleHAiOjE2NDYzMDA3ODB9.sv5cwK4vEQvtvXG9rM63zm2-0FaYQ5f9inEsjJfdhe8'
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
    }, [data._id])
    console.log(favExist);
	return (
		<div className="description">
			<div className="d-flex justify-content-between">
				<h2 className="d-flex align-items-center">
					{data.title} de {data.surface} m²
				</h2>
				<div>
					<Favorite id={data._id} default={favExist} setFav={setFav} />
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
