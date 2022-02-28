import Img from '../../templates/Img'
import banner from '../../assets/real-estate-paper-finance-budgeting-concept.jpg'
import '../../styles/Home.css'

const Home = () => {
	return (
		<div>
			<Img
				idValue="homeBanner"
				srcValue={banner}
				altValue="Bannière Accueil Amaizon"
			/>
		</div>
	)
}

export default Home
