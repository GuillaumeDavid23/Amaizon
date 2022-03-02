import { useForm } from 'react-hook-form'
import { useState } from 'react'
// import { Redirect } from 'react-router-dom'

const ConnectFrom = () => {
	const [passwordRevealed, revealPassword] = useState(false)

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

			fetch('http://localhost:5000/api/user/login', {
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
						window.location.href = 'http://localhost:3000/'
					}
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form id="connectForm" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<div className="d-flex justify-content-center align-items-center">
					<label
						htmlFor="email"
						className="form-label w-25 text-end me-3"
					>
						Adresse Email:
					</label>
					<input
						type="email"
						className={
							!errors.mail
								? 'form-control w-50'
								: 'form-control w-50 is-invalid'
						}
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
				</div>
			</div>
			<div className="mb-3">
				<div className="d-flex justify-content-center align-items-center">
					<label
						htmlFor="password"
						className="form-label w-25 text-end me-3"
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
							required: true,
						})}
						onBlur={() => console.log(isValid)}
					/>
				</div>
				<div className="d-flex flex-column align-items-center">
					<div id="emptyPasswordError" className="error"></div>
				</div>
			</div>
			<div id="pwHelp" className="d-flex justify-content-around">
				<div className="d-flex">
					<input
						type="checkbox"
						className="form-check-input me-1"
						onChange={(e) => revealPassword(e.target.checked)}
					/>
					<label
						htmlFor="passwordVisibility"
						className="form-check-label"
					>
						Afficher le mot de passe
					</label>
				</div>
				<a href="/index.php?nav=pwForgotten" className="me-4">
					Mot de passe oublié ?
				</a>
			</div>
			<div className="my-3 text-center">
				<input
					type="checkbox"
					className="form-check-input"
					id="rememberMe"
					name="rememberMe"
				/>
				<label htmlFor="rememberMe" className="form-check-label">
					Se souvenir de moi?
				</label>
			</div>
			<div className="d-flex justify-content-center mb-3">
				<button id="connectBtn" className="px-4">
					CONNEXION
				</button>
				{/* <button disabled={isSubmitting || !isValid} className="px-4">
                        CONNEXION
                    </button> */}
				{/* <button id="connectBtn" className="btn px-4">
                        CONNEXION
                    </button> */}
			</div>
		</form>
	)
}

export default ConnectFrom
