import '../../styles/Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from './components/Banner'
import AnimatedPage from '../../templates/AnimatedPage'

const Home = (props) => {
	return (
		<AnimatedPage>
			<Container fluid className="w-100 h-100 p-0">
				<Banner />
				<Row className="section-cro">
					<Col xs={12} className="themTitle">
						<h1 className="text-white text-center mt-4 ">
							Location, achat et vente biens immobiliers sur
							Amiens et sa périphérie.
						</h1>
					</Col>
					<Col>
						<div class="croCorps text-center mb-5">
							Bienvenue à l'agence Amaizon, votre conseil immobilier
							sur Amiens depuis plus de 40 ans. Vous cherchez un
							appartement à louer sur Amiens, une maison en
							location dans la métropole d'Amiens ou dans les
							proches environs. Vous souhaitez acheter un bien
							dans le centre ville d'Amiens, à Henriville, dans le
							quartier de votre choix ou dans la périphérie.
							L'agence IMMO, agence immobilière indépendante,
							adhérente à la FNAIM, met tout en oeuvre pour
							répondre à votre demande dans les meilleurs délais.
							Présente depuis de nombreuses années sur le marché
							immobilier amiénois des particuliers et des
							professionnels, notre équipe possède une véritable
							expertise en location, achat, vente, gestion
							locative et services de syndic de copropriété. Nous
							nous efforçons de vous proposer dans notre sélection
							d'appartements, maisons et locaux commerciaux, à
							l'achat ou la location, un choix varié de biens de
							qualité. Notre équipe d'agents immobiliers sur
							Amiens et disponible 6 jours sur 7 pour vous
							accompagner dans vos projets immobiliers.
						</div>
					</Col>
				</Row>
			</Container>
		</AnimatedPage>
	)
}

export default Home
