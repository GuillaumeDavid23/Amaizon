import Img from '../../../templates/Img'
import '../../../styles/Profil.css'

const Profil = (props) => {
	const { srcValue, altValue, name, role } = props

	return (
		<div className="d-flex flex-column my-3 mx-4">
			<Img
				classList="profilAvatar"
				srcValue={srcValue}
				altValue={altValue}
			/>
			<span className="profilText text-center">{name}</span>
			<span className="profilText text-center">{role}</span>
		</div>
	)
}

export default Profil
