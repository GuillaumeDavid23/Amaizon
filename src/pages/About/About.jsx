import { Container, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profil from './components/Profil'
import avatar from '../../assets/default-avatar.png'
import AnimatedPage from '../../templates/AnimatedPage'

const About = () => {
	return (
		<AnimatedPage>
			<Container>
				<Row className="justify-content-center mt-4">
					<Col>
						<h1 className="text-center">A propos de nous</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs="10" lg="6" className="bo_subcontainer mx-4 my-5">
						<p>
							L'agence Amaizon présente depuis 1969 à Amiens au 70 rue
							des Jacobins est une référence en matière immobilière
							dans la région.
						</p>
						<p>
							Nous vous proposons un éventail de services,
							Transactions : Ventes et Locations, Admnistration de
							biens : Gestion locative et Syndic de copropriété.
						</p>
						<p>
							Une équipe de 16 collaborateurs régulièrement formés est
							à votre écoute du lundi au samedi.
						</p>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Row>
						<Col>
							<h2 className="text-center text-decoration-underline">
								Administration
							</h2>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col xs="6" lg="2">
							<Profil
								srcValue={avatar}
								altValue="Avatar de Christelle Jambon - Directrice"
								name="Christelle Jambon"
								role="Directrice"
							/>
						</Col>
						<Col xs="6" lg="2">
							<Profil
								srcValue={avatar}
								altValue="Avatar de Jacqueline Dupont - Secrétaire"
								name="Jacqueline Dupont"
								role="Secrétaire"
							/>
						</Col>
					</Row>
					<Row>
						<Row>
							<h2 className="text-center text-decoration-underline">
								Agents
							</h2>
						</Row>
						<Row className="justify-content-center">
							<Col xs="6" lg="2">
								<Profil
									srcValue={avatar}
									altValue="Avatar de Jacqueline Dupont - Secrétaire"
									name="Jacqueline Dupont"
									role="Secrétaire"
								/>
							</Col>
							<Col xs="6" lg="2">
								<Profil
									srcValue={avatar}
									altValue="Avatar de Jacqueline Dupont - Secrétaire"
									name="Jacqueline Dupont"
									role="Secrétaire"
								/>
							</Col>
							<Col xs="6" lg="2">
								<Profil
									srcValue={avatar}
									altValue="Avatar de Jacqueline Dupont - Secrétaire"
									name="Jacqueline Dupont"
									role="Secrétaire"
								/>
							</Col>
							<Col xs="6" lg="2">
								<Profil
									srcValue={avatar}
									altValue="Avatar de Jacqueline Dupont - Secrétaire"
									name="Jacqueline Dupont"
									role="Secrétaire"
								/>
							</Col>
						</Row>
					</Row>
					<Row className="justify-content-center">
						<Col lg="2">
							<Link to="/contactus">
								<Button className="btn-general my-4 w-100">
									Contactez-nous !
								</Button>
							</Link>
						</Col>
					</Row>
				</Row>
			</Container>
		</AnimatedPage>
	)
}

export default About
