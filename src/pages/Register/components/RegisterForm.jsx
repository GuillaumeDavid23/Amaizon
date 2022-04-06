import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import CheckBox from '../../../templates/CheckBox'

const RegisterForm = () => {
	const [passwordRevealed, revealPassword] = useState(false)
	const [passwordsMatch, setPasswordsMatch] = useState(true)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		shouldFocusError: true,
	})

	const onSubmit = (data) => {
		try {
			if (data.password !== data.passwordRepeat) {
				setPasswordsMatch(false)
			} else {
				let body = JSON.stringify({
					lastname: data.lastname,
					firstname: data.firstname,
					email: data.email,
					tel: data.tel,
					password: data.password,
					buyer: {
						wishlist: [],
					},
					newsletter: data.newsletter,
				})

				fetch(process.env.REACT_APP_API_DOMAIN + 'api/user/signup', {
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
						if (response.status_code === 201) {
							localStorage.setItem(
								'REACT_TOKEN_AUTH_AMAIZON',
								JSON.stringify(response.token)
							)
							window.location.href = '/emailVerification/before'
						}
					})
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container className="bo_subcontainer" style={{ borderRadius: '30px' }}>
			<form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
				<div className="d-flex justify-content-around my-3">
					<div className="d-flex flex-column w-50 mx-3">
						<input
							type="text"
							className={
								!errors.lastname
									? 'form-control rounded-pill'
									: 'form-control rounded-pill is-invalid'
							}
							placeholder="Votre nom"
							{...register('lastname', {
								required:
									'Vous devez indiquer votre nom de famille.',
								pattern: {
									value: /^[a-z ,.'-]+$/i,
									message: 'Entrer un nom de famille valide',
								},
							})}
						/>
						{errors?.lastname && (
							<span className="invalid-feedback fw-bold">
								{errors.lastname.message}
							</span>
						)}
					</div>{' '}
					<div className="d-flex flex-column w-50 mx-3">
						<input
							type="text"
							className={
								!errors.firstname
									? 'form-control rounded-pill'
									: 'form-control rounded-pill is-invalid'
							}
							placeholder="Votre prénom"
							{...register('firstname', {
								required: 'Vous devez indiquer votre prénom.',
								pattern: {
									value: /^[a-z ,.'-]+$/i,
									message: 'Entrer un prénom valide',
								},
							})}
						/>
						{errors?.firstname && (
							<span className="invalid-feedback fw-bold">
								{errors.firstname.message}
							</span>
						)}
					</div>
				</div>
				<div className="d-flex justify-content-around my-3">
					<div className="d-flex flex-column w-50 mx-3">
						<input
							type="email"
							className={
								!errors.email
									? 'form-control rounded-pill'
									: 'form-control rounded-pill is-invalid'
							}
							placeholder="Votre email"
							{...register('email', {
								required: 'Vous devez indiquer votre email.',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'Entrer une email valide',
								},
							})}
						/>
						{errors?.email && (
							<span className="invalid-feedback fw-bold">
								{errors.email.message}
							</span>
						)}
					</div>
					<div className="d-flex flex-column w-50 mx-3">
						<input
							type="tel"
							className={
								!errors.tel
									? 'form-control rounded-pill'
									: 'form-control rounded-pill is-invalid'
							}
							placeholder="Votre téléphone (facultatif)"
							{...register('tel', {
								pattern: {
									value: /^((\+)33|0|0033)[1-9](\d{2}){4}$/g,
									message:
										'Entrer un numéro de téléphone valide',
								},
							})}
						/>
						{errors?.tel && (
							<span className="invalid-feedback fw-bold">
								{errors.tel.message}
							</span>
						)}
					</div>
				</div>
				<div className="d-flex justify-content-around my-3">
					<div className="d-flex flex-column w-50 mx-3">
						{' '}
						<input
							type={!passwordRevealed ? 'password' : 'text'}
							className={
								!errors.password
									? 'form-control rounded-pill'
									: 'form-control rounded-pill is-invalid'
							}
							placeholder="Mot de passe"
							{...register('password', {
								required:
									'Vous devez indiquer votre mot de passe.',
								pattern: {
									value: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
									message: 'Entrer un mot de passe valide',
								},
							})}
						/>
						{errors?.password && (
							<span className="invalid-feedback fw-bold">
								{errors.password.message}
							</span>
						)}
					</div>
					<div className="d-flex flex-column w-50 mx-3">
						<input
							type={!passwordRevealed ? 'password' : 'text'}
							className={
								!errors.passwordRepeat
									? 'form-control rounded-pill'
									: 'form-control rounded-pill is-invalid'
							}
							placeholder="Confirmez votre mot de passe"
							{...register('passwordRepeat', {
								required:
									'Vous devez réindiquer votre mot de passe.',
								pattern: {
									value: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
									message: 'Entrer un mot de passe valide',
								},
							})}
						/>
						{errors?.passwordRepeat && (
							<span className="invalid-feedback fw-bold">
								{errors.passwordRepeat.message}
							</span>
						)}
					</div>
				</div>
				<div id="pwHelp" className="d-flex justify-content-around my-3">
					{!passwordsMatch && (
						<Alert className="text-center" variant="danger">
							Les deux mots de passe sont différents.
						</Alert>
					)}
					<div className="d-flex">
						<CheckBox
							id={'revealPassword'}
							className="me-2"
							change={(e) => revealPassword(e.target.checked)}
						/>
						<label
							htmlFor="revealPassword"
							className="form-check-label"
						>
							Afficher les mots de passe.
						</label>
					</div>
				</div>
				<div className="my-3 text-center">
					<label className="switch me-2">
						<input type="checkbox" {...register('newsletter')} />
						<span className="slider round"></span>
					</label>
					<label htmlFor="newsletter" className="form-check-label">
						Je souhaite m'inscrire à la newsletter.
					</label>
				</div>
				<div className="d-flex justify-content-center mt-3">
					<Button
						type="submit"
						disabled={!isValid}
						className="header-btn"
					>
						Inscription
					</Button>
				</div>
			</form>
		</Container>
	)
}

export default RegisterForm
