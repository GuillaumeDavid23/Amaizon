import { Col } from 'react-bootstrap'
import logo from '../../../assets/logo.png'
import Img from '../../Img'

const Credits = () => {
	return (
		<Col
			lg="12"
			className="d-flex flex-column justify-content-beetween align-items-center"
		>
			<Img
				idValue="logoFooter"
				classList="d-lg-none"
				srcValue={logo}
				altValue="Logo Amaizon"
			/>
			<h6>Amaizon ©2021 - Tout droits réservés</h6>
		</Col>
	)
}

export default Credits
