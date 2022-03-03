import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profil from './components/Profil'
import avatar from '../../assets/default-avatar.png'

const About = () => {
	return (
		<div className="d-flex flex-column align-items-center">
			<Container
				className="bo_subcontainer my-5"
				style={{ borderRadius: '30px', width: '40%' }}
			>
				<div className="mx-4">
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
				</div>
			</Container>
			<h2 className="text-center text-decoration-underline">
				Administration
			</h2>
			<div className="d-flex">
				<Profil
					srcValue={avatar}
					altValue="Avatar de Christelle Jambon - Directrice"
					name="Christelle Jambon"
					role="Directrice"
				/>
				<Profil
					srcValue={avatar}
					altValue="Avatar de Jacqueline Dupont - Secrétaire"
					name="Jacqueline Dupont"
					role="Secrétaire"
				/>
			</div>
			<h2 className="text-center text-decoration-underline">Agents</h2>
			<div className="d-flex">
				<Profil
					srcValue={avatar}
					altValue="Avatar de Jacqueline Dupont - Secrétaire"
					name="Jacqueline Dupont"
					role="Secrétaire"
				/>
				<Profil
					srcValue={avatar}
					altValue="Avatar de Jacqueline Dupont - Secrétaire"
					name="Jacqueline Dupont"
					role="Secrétaire"
				/>
				<Profil
					srcValue={avatar}
					altValue="Avatar de Jacqueline Dupont - Secrétaire"
					name="Jacqueline Dupont"
					role="Secrétaire"
				/>
				<Profil
					srcValue={avatar}
					altValue="Avatar de Jacqueline Dupont - Secrétaire"
					name="Jacqueline Dupont"
					role="Secrétaire"
				/>
			</div>
			<Link to="/contactus">
				<Button className="btn-general my-4" style={{ width: '150px' }}>
					Contactez-nous !
				</Button>
			</Link>
		</div>
	)
}

export default About
