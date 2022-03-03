import { useForm } from 'react-hook-form'
import { Button } from 'react-bootstrap'

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, ...formState },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		shouldFocusError: true,
	})

	const { isValid, isSubmitting, isSubmitted, isSubmitSuccessful } = formState

	const onSubmit = (data) => {
		try {
			let body = JSON.stringify({
				email: data.email,
				password: data.password,
			})

			fetch(process.env.REACT_APP_API_DOMAIN + 'api/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body,
			})
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					if (response.status_code === 200) {
						localStorage.setItem(
							'REACT_TOKEN_AUTH_AMAIZON',
							JSON.stringify(response.token)
						)
						window.location.href = process.env.REACT_APP_UI_DOMAIN
					}
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="d-flex flex-column align-items-center justify-content-center w-50">
			<h2>Contact</h2>
			<form
				id="contactForm"
				onSubmit={handleSubmit(onSubmit)}
				className="w-75"
			>
				<div className="d-flex justify-content-around my-3">
					<input
						type="text"
						className={
							!errors.lastname
								? 'form-control w-50 me-4 rounded-pill'
								: 'form-control w-50 me-4 rounded-pill is-invalid'
						}
						placeholder="Votre nom"
						{...register('lastname', {
							required:
								'Vous devez indiquer votre nom de famille.',
						})}
						onBlur={() => console.log(isValid)}
					/>
					{errors.lastname && (
						<span className="invalid-feedback">
							{errors.lastname.message}
						</span>
					)}
					<input
						type="text"
						className={
							!errors.firstname
								? 'form-control w-50 ms-4 rounded-pill'
								: 'form-control w-50 ms-4 rounded-pill is-invalid'
						}
						placeholder="Votre prénom"
						{...register('firstname', {
							required: 'Vous devez indiquer votre prénom.',
						})}
						onBlur={() => console.log(isValid)}
					/>
					{errors.firstname && (
						<span className="invalid-feedback">
							{errors.firstname.message}
						</span>
					)}
				</div>
				<div className="d-flex justify-content-around my-3">
					<input
						type="email"
						className={
							!errors.email
								? 'form-control w-50 me-4 rounded-pill'
								: 'form-control w-50 me-4 rounded-pill is-invalid'
						}
						placeholder="Votre email"
						{...register('email', {
							required: 'Vous devez indiquer votre email.',
						})}
						onBlur={() => console.log(isValid)}
					/>
					{errors.email && (
						<span className="invalid-feedback">
							{errors.email.message}
						</span>
					)}
					<input
						type="tel"
						className={
							!errors.tel
								? 'form-control w-50 ms-4 rounded-pill'
								: 'form-control w-50 ms-4 rounded-pill is-invalid'
						}
						placeholder="Votre téléphone"
						{...register('tel', {
							required: 'Vous devez indiquer votre téléphone.',
						})}
						onBlur={() => console.log(isValid)}
					/>
					{errors.tel && (
						<span className="invalid-feedback">
							{errors.tel.message}
						</span>
					)}
				</div>
				<div className="my-3">
					<input
						type="text"
						className={
							!errors.subject
								? 'form-control rounded-pill'
								: 'form-control rounded-pill is-invalid'
						}
						placeholder="Le sujet de votre message"
						{...register('subject', {
							required: true,
						})}
						onBlur={() => console.log(isValid)}
					/>
				</div>
				<div className="my-3">
					<textarea
						type="text"
						className={
							!errors.message
								? 'form-control rounded-pill'
								: 'form-control rounded-pill is-invalid'
						}
						placeholder="Votre message"
						{...register('message', {
							required: true,
						})}
						onBlur={() => console.log(isValid)}
					/>
				</div>
				<div className="d-flex justify-content-center my-3">
					<Button type="submit" className="header-btn">
						Envoyer
					</Button>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
