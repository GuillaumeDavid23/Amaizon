import { useForm } from 'react-hook-form'
import { Button } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { Context } from '../../../App'
import { Col } from 'react-bootstrap'
import {
	GoogleReCaptchaProvider,
	GoogleReCaptcha,
} from 'react-google-recaptcha-v3'

import Flash from '../../../templates/Flash.jsx'

const ContactForm = () => {
	const [messageSent, setMessageSent] = useState(false)
	const [showFlash, setShowFlash] = useState(false)
	const [showErrorFlash, setShowErrorFlash] = useState(false)
	const [captchaToken, setCaptchaToken] = useState()

	const {
		register,
		handleSubmit,
		formState: { errors, ...formState },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		shouldFocusError: true,
	})

	const { isValid } = formState

	let isConnected = useContext(Context).connected
	let userInfos = useContext(Context).userInfos

	const onSubmit = (data) => {
		try {
			var body
			if (isConnected) {
				body = JSON.stringify({
					lastname: userInfos.lastname,
					firstname: userInfos.firstname,
					email: userInfos.email,
					tel: userInfos.tel,
					subject: data.subject,
					message: data.message,
				})
			} else {
				body = JSON.stringify({
					lastname: data.lastname,
					firstname: data.firstname,
					email: data.email,
					tel: data.tel,
					subject: data.subject,
					message: data.message,
				})
			}

			fetch(process.env.REACT_APP_API_DOMAIN + 'api/user/sendMessage', {
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
						setMessageSent(true)
						setShowFlash(true)
						setTimeout(() => setShowFlash(false), 5000)
					}
				})
				.catch((err) => {
					console.error(err)

					setShowErrorFlash(true)
					setTimeout(() => setShowErrorFlash(false), 5000)

					setMessageSent(false)
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Col
			xs="12"
			lg="6"
			className="d-flex flex-column align-items-center justify-content-center"
		>
			<Flash
				show={showErrorFlash}
				className="alert-danger"
				message="L'email n'a pas pu être envoyé."
			/>
			<Flash
				show={showFlash}
				className="alert-success"
				message="Votre message a été envoyé !"
			/>
			<h2>Contactez nous !</h2>
			<form
				id="contactForm"
				onSubmit={handleSubmit(onSubmit)}
				className="w-75"
			>
				{!isConnected ? (
					<>
						<div
							className="d-flex justify-content-around my-3"
							style={{ height: '50px' }}
						>
							<input
								type="text"
								className={
									!errors.lastname
										? 'form-control w-50 me-4 rounded-4'
										: 'form-control w-50 me-4 rounded-4 is-invalid'
								}
								placeholder="Votre nom"
								{...register('lastname', {
									required:
										'Vous devez indiquer votre nom de famille.',
									pattern: {
										value: /^[a-z ,.'-]+$/i,
										message:
											'Entrer un nom de famille valide',
									},
								})}
								onBlur={() => console.log(isValid)}
								disabled={messageSent}
							/>
							{errors?.lastname && (
								<span className="invalid-feedback">
									{errors.lastname.message}
								</span>
							)}
							<input
								type="text"
								className={
									!errors.firstname
										? 'form-control w-50 ms-4 rounded-4'
										: 'form-control w-50 ms-4 rounded-4 is-invalid'
								}
								placeholder="Votre prénom"
								{...register('firstname', {
									required:
										'Vous devez indiquer votre prénom.',
									pattern: {
										value: /^[a-z ,.'-]+$/i,
										message: 'Entrer un prénom valide',
									},
								})}
								onBlur={() => console.log(isValid)}
								disabled={messageSent}
							/>
							{errors?.firstname && (
								<span className="invalid-feedback">
									{errors.firstname.message}
								</span>
							)}
						</div>
						<div
							className="d-flex justify-content-around my-3"
							style={{ height: '50px' }}
						>
							<input
								type="email"
								className={
									!errors.email
										? 'form-control w-50 me-4 rounded-4'
										: 'form-control w-50 me-4 rounded-4 is-invalid'
								}
								placeholder="Votre email"
								{...register('email', {
									required:
										'Vous devez indiquer votre email.',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'Entrer une email valide',
									},
								})}
								onBlur={() => console.log(isValid)}
								disabled={messageSent}
							/>
							{errors?.email && (
								<span className="invalid-feedback">
									{errors.email.message}
								</span>
							)}
							<input
								type="tel"
								className={
									!errors.tel
										? 'form-control w-50 ms-4 rounded-4'
										: 'form-control w-50 ms-4 rounded-4 is-invalid'
								}
								placeholder="Votre téléphone"
								{...register('tel', {
									pattern: {
										value: /^((\+)33|0|0033)[1-9](\d{2}){4}$/g,
										message:
											'Entrer un numéro de téléphone valide',
									},
								})}
								onBlur={() => console.log(isValid)}
								disabled={messageSent}
							/>
							{errors?.tel && (
								<span className="invalid-feedback">
									{errors.tel.message}
								</span>
							)}
						</div>
					</>
				) : (
					''
				)}
				<div className="d-flex my-3" style={{ height: '50px' }}>
					<input
						type="text"
						className={
							!errors.subject
								? 'form-control rounded-4'
								: 'form-control rounded-4 is-invalid'
						}
						placeholder="Le sujet de votre message"
						{...register('subject', {
							required:
								'Vous devez entrer le sujet de votre message.',
						})}
						onBlur={() => console.log(isValid)}
						disabled={messageSent}
					/>
					{errors?.subject && (
						<span className="invalid-feedback">
							{errors.subject.message}
						</span>
					)}
				</div>
				<div className="d-flex my-3" style={{ height: '100px' }}>
					<textarea
						type="text"
						className={
							!errors.message
								? 'form-control rounded-4'
								: 'form-control rounded-4 is-invalid'
						}
						placeholder="Votre message"
						{...register('message', {
							required: 'Vous devez entrer votre message.',
						})}
						onBlur={() => console.log(isValid)}
						disabled={messageSent}
					/>
					{errors?.message && (
						<span className="invalid-feedback">
							{errors.message.message}
						</span>
					)}
				</div>
				<div className="d-flex justify-content-center align-items-center my-3">
					<GoogleReCaptchaProvider
						reCaptchaKey={process.env.REACT_APP_SITE_KEY}
					>
						<GoogleReCaptcha
							onVerify={(token) => {
								setCaptchaToken(token)
							}}
						/>
					</GoogleReCaptchaProvider>
					<Button
						type="submit"
						className="header-btn"
						disabled={messageSent}
					>
						Envoyer
					</Button>
					{messageSent ? (
						<span className="ms-3" style={{ color: 'green' }}>
							Message envoyé !
						</span>
					) : (
						''
					)}
				</div>
			</form>
		</Col>
	)
}

export default ContactForm
