import Input from '../../../templates/Input'

const Newsletter = () => {
	return (
		<div>
			<h4 className="text-decoration-underline">
				Je m'inscris à la newsletter:
			</h4>
			<Input
				id="newsletter"
				type="text"
				placeholder="Entrez votre adresse email.."
			/>
		</div>
	)
}

export default Newsletter
