import { Button } from 'react-bootstrap'
//This components is for create search forms
const BtnGeneral = (props) => {
	return (
		<Button className={`btn-general ${props.className}`} variant="primary">
			{props.text}
		</Button>
	)
}

export default BtnGeneral
