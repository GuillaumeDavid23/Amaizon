import RegisterForm from './components/RegisterForm'
import AnimatedPage from '../../templates/AnimatedPage'
import { Row, Col } from 'react-bootstrap'


const Connect = () => {
	return (
		<AnimatedPage>
			<Row className="align-items-center justify-content-center flex-column maxPage">
				<Col xs="10" md="6" className=''>
					<h1 className='fw-bold text-center'>Inscription</h1>
				</Col>
				<Col xs="10" md="6">
					<RegisterForm />
				</Col>
			</Row>
		</AnimatedPage>
	)
}

export default Connect
