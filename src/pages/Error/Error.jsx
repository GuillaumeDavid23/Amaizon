import './Error.css'
import Img from '../../templates/Img'
import errorImg from '../../assets/404.jpg'

const Error = () => {
	return (
		<div className="d-flex justify-content-center">
			<Img idValue="errorImg" srcValue={errorImg} altValue="Image 404" />
		</div>
	)
}

export default Error
