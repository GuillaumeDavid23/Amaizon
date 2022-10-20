import { Container, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profil from './components/Profil'
import AnimatedPage from '../../templates/AnimatedPage'
import { useState, useEffect } from 'react'

const About = () => {
	const [agents, setAgents] = useState([])

	useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN + 'api/user/agents', {
			method: 'GET',
		})
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				if (response.status_code === 200) {
					setAgents(response.datas)
				}
			})
	}, [])

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
							L'agence Amaizon présente depuis 1969 à Amiens au 70
							rue des Jacobins est une référence en matière
							immobilière dans la région.
						</p>
						<p>
							Nous vous proposons un éventail de services,
							Transactions : Ventes et Locations, Admnistration de
							biens : Gestion locative et Syndic de copropriété.
						</p>
						<p>
							Une équipe de 16 collaborateurs régulièrement formés
							est à votre écoute du lundi au samedi.
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Row>
						<Col>
							<h2 className="text-center text-decoration-underline">
								Administration
							</h2>
						</Col>
					</Row>
					<Row className="justify-content-center">
						{agents.map((agent) => {
							return agent.agent.position === 'Directrice' ||
								agent.agent.position === 'Directeur' ? (
								<Col xs="6" lg="2" key={'agent-' + agent._id}>
									<Profil
										srcValue={`${process.env.REACT_APP_API_DOMAIN}avatar/${agent._id}.png`}
										altValue={`Avatar de ${agent.firstname} ${agent.lastname} - ${agent.agent.position}`}
										name={`${agent.firstname} ${agent.lastname}`}
										role={agent.agent.position}
									/>
								</Col>
							) : (
								''
							)
						})}
						{agents.map((agent) => {
							return agent.agent.position === 'Secrétaire' ? (
								<Col xs="6" lg="2" key={'agent-' + agent._id}>
									<Profil
										srcValue={`${process.env.REACT_APP_API_DOMAIN}avatar/${agent._id}.png`}
										altValue={`Avatar de ${agent.firstname} ${agent.lastname} - ${agent.agent.position}`}
										name={`${agent.firstname} ${agent.lastname}`}
										role={agent.agent.position}
									/>
								</Col>
							) : (
								''
							)
						})}
					</Row>
					<Row>
						<Row>
							<h2 className="text-center text-decoration-underline">
								Agents
							</h2>
						</Row>
						<Row className="justify-content-center">
							{agents.map((agent) => {
								return agent.agent.position ===
									'Conseiller Immobilier' ? (
									<Col
										xs="6"
										lg="2"
										key={'agent-' + agent._id}
									>
										<Profil
											srcValue={`${process.env.REACT_APP_API_DOMAIN}avatar/${agent._id}.png`}
											altValue={`Avatar de ${agent.firstname} ${agent.lastname} - ${agent.agent.position}`}
											name={`${agent.firstname} ${agent.lastname}`}
											role={agent.agent.position}
										/>
									</Col>
								) : (
									''
								)
							})}
							{agents.map((agent) => {
								return agent.agent.position ===
									'Chargé Commercial' ? (
									<Col
										xs="6"
										lg="2"
										key={'agent-' + agent._id}
									>
										<Profil
											srcValue={`${process.env.REACT_APP_API_DOMAIN}avatar/${agent._id}.png`}
											altValue={`Avatar de ${agent.firstname} ${agent.lastname} - ${agent.agent.position}`}
											name={`${agent.firstname} ${agent.lastname}`}
											role={agent.agent.position}
										/>
									</Col>
								) : (
									''
								)
							})}
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
