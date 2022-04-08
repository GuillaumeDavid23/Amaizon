import ConnectForm from './components/ConnectForm'
import AnimatedPage from '../../templates/AnimatedPage'
import { Row, Col } from 'react-bootstrap'


const Connect = () => {
	return (
		<AnimatedPage>
			<Row className=" flex-column justify-content-center align-items-center maxPage">
				<Col xs="10" md="6" className="text-center">
					<h1>Connexion</h1>
				</Col>
				<Col xs="10" md="6" className="connectForm">
					<ConnectForm />
				</Col>
			</Row>
		</AnimatedPage>
	)
}

export default Connect
