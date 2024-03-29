import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Container, Button, Alert, Row, Col } from 'react-bootstrap'
import CheckBox from '../../../templates/CheckBox'
import { Link } from 'react-router-dom'
import '../../../styles/Connect.css'



const ConnectForm = () => {
	const [passwordRevealed, revealPassword] = useState(false)
	const [notFound, setNotFound] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onTouched',
		reValidateMode: 'onTouched',
		shouldFocusError: true,
	})

	const onSubmit = (data) => {
		try {
			let { email, password, rememberMe } = data
			let body = JSON.stringify({
				email,
				password,
				rememberMe,
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
						if (response.refreshToken) {
							localStorage.setItem(
								'REACT_REFRESH_TOKEN_AUTH_AMAIZON',
								JSON.stringify(response.refreshToken)
							)
						}
						if (response.message === 'Utilisateur connecté !') {
							window.location.href =
								process.env.REACT_APP_UI_DOMAIN
						} else {
							window.location.href =
								process.env.REACT_APP_UI_DOMAIN +
								'emailVerification/before'
						}
					} else {
						setNotFound(response.error)
					}
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container className="connectBlock">
			<form id="connectForm" onSubmit={handleSubmit(onSubmit)}>
				<Alert
					className={notFound === '' ? 'd-none' : ''}
					variant="warning"
				>
					{notFound}
				</Alert>
				<Row className="flex-column align-items-center">
					<Col
						xs="10"
						lg="6"
						className="d-flex justify-content-center align-items-center flex-column"
					>
						<label
							htmlFor="email"
							className="form-label text-center fw-bold"
						>
							Adresse Email:
						</label>
						<input
							type="email"
							className={
								!errors.email
									? 'form-control'
									: 'form-control is-invalid'
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
					</Col>
					<Col
						xs="10"
						lg="6"
						className="d-flex justify-content-center align-items-center flex-column mb-4"
					>
						<label
							htmlFor="password"
							className="form-label text-center fw-bold"
						>
							Mot de passe:
						</label>
						<input
							type={!passwordRevealed ? 'password' : 'text'}
							className={
								!errors.password
									? 'form-control'
									: 'form-control is-invalid'
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
						<Link to="/forgetPass">Mot de passe oublié ?</Link>
					</Col>
				</Row>
				<div id="pwHelp" className="d-flex justify-content-around">
					<div className="d-flex align-items-center">
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
				<div className="my-3 d-flex justify-content-center align-items-center">
					<label className={'switch me-2'}>
						<input type="checkbox" {...register('rememberMe')} />
						<span className="slider round"></span>
					</label>
					<label htmlFor="rememberMe" className="form-check-label">
						Se souvenir de moi?
					</label>
				</div>
				<div className="my-3 text-center">
					<Link to="/register">
						Pas encore de compte ? Inscrivez-vous !
					</Link>
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
