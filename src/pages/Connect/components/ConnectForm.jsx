import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import CheckBox from '../../../templates/CheckBox'

const ConnectForm = () => {
	const [passwordRevealed, revealPassword] = useState(false)
	const [notFound, setNotFound] = useState('')

	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
		},
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		shouldFocusError: true,
	})

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
					}else{
						setNotFound(response.error)
					}
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container className="bo_subcontainer" style={{ borderRadius: '30px' }}>
			<form id="connectForm" onSubmit={handleSubmit(onSubmit)}>
				<Alert
					className={notFound === '' ? 'd-none' : ''}
					variant="warning"
				>
					Votre email / mot de passe est invalide
				</Alert>
				<div className="my-3">
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
						<label
							htmlFor="email"
							className="form-label w-25 text-center fw-bold"
						>
							Adresse Email:
						</label>
						<input
							type="email"
							className={
								!errors.email
									? 'form-control w-50'
									: 'form-control w-50 is-invalid'
							}
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
				</div>
				<div className="mb-4">
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
						<label
							htmlFor="password"
							className="form-label w-25 text-center fw-bold"
						>
							Mot de passe:
						</label>
						<input
							type={!passwordRevealed ? 'password' : 'text'}
							className={
								!errors.password
									? 'form-control w-50'
									: 'form-control w-50 is-invalid'
							}
							{...register('password', {
								required:
									'Vous devez remplir votre mot de passe',
							})}
						/>
						{errors?.password && (
							<span className="invalid-feedback fw-bold">
								{errors.password.message}
							</span>
						)}
						<a
							href="/"
							className="align-self-center"
						>
							Mot de passe oublié ?
						</a>
					</div>
				</div>

				<div id="pwHelp" className="d-flex justify-content-around">
					<div className="d-flex">
						<CheckBox
							id={'revealPassword'}
							className="me-2"
							change={(e) => revealPassword(e.target.checked)}
						/>
						<label
							htmlFor="passwordVisibility"
							className="form-check-label"
						>
							Afficher le mot de passe
						</label>
					</div>
				</div>
				<div className="my-3 text-center">
					<CheckBox id={'rememberMe'} className="me-2" />
					<label htmlFor="rememberMe" className="form-check-label">
						Se souvenir de moi?
					</label>
				</div>
				<div className="d-flex justify-content-center mb-3">
					<Button
						type="submit"
						disabled={!isValid}
						className="header-btn"
					>
						CONNEXION
					</Button>
				</div>
			</form>
		</Container>
	)
}

export default ConnectForm
