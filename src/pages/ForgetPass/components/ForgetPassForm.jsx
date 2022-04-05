import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import CheckBox from '../../../templates/CheckBox'
import { Link } from 'react-router-dom'

const ForgetPassForm = () => {
	const [notFound, setNotFound] = useState('')

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
			fetch(process.env.REACT_APP_API_DOMAIN + 'api/user/forgot', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ email: data.email }),
			})
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					if (response.status_code === 200) {
						// localStorage.setItem(
						// 	'REACT_TOKEN_AUTH_AMAIZON',
						// 	JSON.stringify(response.token)
						// )
						// if (response.refreshToken) {
						// 	localStorage.setItem(
						// 		'REACT_REFRESH_TOKEN_AUTH_AMAIZON',
						// 		JSON.stringify(response.refreshToken)
						// 	)
						// }
						// if (response.message === 'Utilisateur connecté !') {
						// 	window.location.href =
						// 		process.env.REACT_APP_UI_DOMAIN
						// } else {
						// 	window.location.href =
						// 		process.env.REACT_APP_UI_DOMAIN +
						// 		'emailVerification/before'
						// }
					} else {
						setNotFound(response.message)
					}
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container className="bo_subcontainer" style={{ borderRadius: '30px' }}>
			<form id="forgetPassForm" onSubmit={handleSubmit(onSubmit)}>
				{notFound && (
					<div className="d-flex justify-content-center">
						<Alert className="text-center w-50" variant="danger">
							{notFound}
						</Alert>
					</div>
				)}
				<div className="my-3">
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
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
									? 'form-control text-center w-50'
									: 'form-control text-center w-50 is-invalid'
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
	)
}

export default ForgetPassForm
