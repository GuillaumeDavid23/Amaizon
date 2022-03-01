import { Col } from 'react-bootstrap'

const ContactInfos = () => {
	const handleClick = (e) => {
		e.target.innerHTML =
			"<a href='mailto:amaizon.lamanu@gmail.com'>amaizon.lamanu@gmail.com</a>"
	}

	return (
		<Col xs="6" lg="2">
			<ul>
				<h4 className="text-decoration-underline">Nos coordonnées:</h4>
				<li>
					<a className='telLink' href="tel:0986271704">09 86 27 17 04</a>
				</li>
				<li>70 rue des Jacobins, 80000 Amiens</li>
				<li id='mailLink' onClick={(e) => handleClick(e)}>
					Cliquez ici pour voir l'email
				</li>
			</ul>
		</Col>
	)
}

export default ContactInfos
