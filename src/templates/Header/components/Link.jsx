import { Nav } from 'react-bootstrap'
const Link = (props) => {
	return (
		<Nav.Link
			href={props.link}
			key={`${props.name}-${props.index}`}
			className="header-text"
		>
			{props.name}
		</Nav.Link>
	)
}

export default Link
