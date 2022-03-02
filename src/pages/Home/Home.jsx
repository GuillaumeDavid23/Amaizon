import Img from '../../templates/Img'
import banner from '../../assets/real-estate-paper-finance-budgeting-concept.jpg'
import '../../styles/Home.css'
import Filters from './components/Filters'
import HomeCards from './components/HomeCards'
import { useState, useEffect } from 'react'

const Home = () => {
	const [properties, setProperties] = useState([])

	useEffect(() => {
		fetch(window.env.API_DOMAIN + 'property')
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
			<Filters setProperties={setProperties} />
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
