import Img from '../../templates/Img'
import banner from '../../assets/real-estate-paper-finance-budgeting-concept.jpg'
import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState, useEffect } from 'react'

const Home = () => {
	const [properties, setProperties] = useState([])

	console.log(properties)

	useEffect(() => {
		fetch('http://localhost:5000/api/property')
			.then((response) => {
				return response.json()
			})
			.then((response) => setProperties(response.properties))
	}, [])

	return (
		<div>
			<Img
				idValue="homeBanner"
				srcValue={banner}
				altValue="Bannière Accueil Amaizon"
			/>
			<Filters />
			<div className="row justify-content-around">
				{properties.map((property) => {
					return (
						<div key={property._id} className="col-3">
							<HomeCards propertyDatas={property} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Home
