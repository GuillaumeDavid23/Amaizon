import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CheckBox from '../../../templates/CheckBox'

const ForgetPassAfterForm = ({ id }) => {
	const [passwordRevealed, revealPassword] = useState(false)
	const [passwordsMatch, setPasswordsMatch] = useState(true)
	const [apiResponse, setApiResponse] = useState('')

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
				fetch(
					process.env.REACT_APP_API_DOMAIN + 'api/user/resetPassword',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json;charset=utf-8',
						},
						body: JSON.stringify({ id, password: data.password }),
					}
				)
					.then((response) => {
						return response.json()
					})
					.then((response) => {
						if (response.status_code === 201) {
							setApiResponse(response.message)
							setTimeout(() => window.location.assign('/'), 2500)
						}
					})
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="d-flex justify-content-center">
			<Container
				className="bo_subcontainer w-50"
				style={{ borderRadius: '30px' }}
			>
				{apiResponse && (
					<div className="d-flex justify-content-center">
						<Alert className="text-center w-50" variant="success">
							{apiResponse}
						</Alert>
					</div>
				)}
				<form
					id="forgetPassAfterForm"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="my-3">
						<div className="d-flex justify-content-around my-3">
							<div className="d-flex flex-column w-50 mx-3">
								{' '}
								<input
									type={
										!passwordRevealed ? 'password' : 'text'
									}
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
											message:
												'Entrer un mot de passe valide',
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
									type={
										!passwordRevealed ? 'password' : 'text'
									}
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
											message:
												'Entrer un mot de passe valide',
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
						{!passwordsMatch && (
							<Alert className="text-center" variant="danger">
								Les deux mots de passe sont différents.
							</Alert>
						)}
						<div className="d-flex justify-content-center">
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
					<div className="d-flex justify-content-center mb-3">
						<Link to="/" className="me-3">
							<Button className="header-btn">Retour</Button>
						</Link>
						<Button
							type="submit"
							disabled={!isValid}
							className="header-btn ms-3"
						>
							Envoyer
						</Button>
					</div>
				</form>
			</Container>
		</div>
	)
}

export default ForgetPassAfterForm
