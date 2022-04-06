import { Link } from 'react-router-dom'

//This component is for create one navigation link with props
const LinkElement = (props) => {
	return (
			<Link
				to={props.link}
				className="d-flex justify-content-center header-text nav-link"
			>
				{props.name}
			</Link>
	)
}

export default LinkElement
