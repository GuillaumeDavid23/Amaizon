import logo from '../../../assets/logo.png'
import Img from '../../Img'

const Credits = () => {
	return (
		<div className="d-flex flex-column justify-content-beetween align-items-center">
			<Img idValue="logoFooter" srcValue={logo} altValue="Logo Amaizon" />
			<h6>Amaizon ©2021 - Tout droits réservés</h6>
		</div>
	)
}

export default Credits
