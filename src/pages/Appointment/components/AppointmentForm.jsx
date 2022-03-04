import { useForm } from 'react-hook-form'
import { Row, Col, Form } from 'react-bootstrap'
import BtnGeneral from '../../../templates/BtnGeneral'


const AppointmentForm = (props) => {
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
			let body = JSON.stringify({
				email: data.email,
				lastname: data.lastname,
				firstname: data.firstname,
				infos: data.details,
				reason: data.reason,
				ref: props.idProperty
			})

			fetch(
				process.env.REACT_APP_API_DOMAIN + 'api/user/emailAppointment',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
					},
					body,
				}
			)
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form id="connectForm" onSubmit={handleSubmit(onSubmit)}>
			<Row className="justify-content-center">
				<Col lg="6" className="mb-5">
					<input
						placeholder="Votre nom"
						type="text"
						className={
							!errors.lastname
								? 'form-control'
								: 'form-control is-invalid'
						}
						{...register('lastname', {
							required: 'Vous devez remplir votre nom',
						})}
					/>
					{errors?.lastname && (
						<span className="invalid-feedback fw-bold">
							{errors.lastname.message}
						</span>
					)}
				</Col>
				<Col lg="6" className="mb-5">
					<input
						placeholder="Votre nom"
						type="text"
						className={
							!errors.firstname
								? 'form-control'
								: 'form-control is-invalid'
						}
						{...register('firstname', {
							required: 'Vous devez remplir votre prénom',
						})}
					/>
					{errors?.firstname && (
						<span className="invalid-feedback fw-bold">
							{errors.firstname.message}
						</span>
					)}
				</Col>
				<Col lg="6" className="mb-5">
					<input
						placeholder="Votre email"
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
				<Col lg="6" className="mb-5">
					<Form.Select
						className={
							!errors.reason
								? 'form-control'
								: 'form-control is-invalid'
						}
						{...register('reason', {
							required: 'Vous devez remplir votre raison',
						})}
					>
						<option value="" selected disabled>
							Selectionner une raison
						</option>
						<option value="Plus d'information">
							Plus d'informations
						</option>
						<option value="Visite">Visite</option>
					</Form.Select>
					{errors?.reason && (
						<span className="invalid-feedback fw-bold">
							{errors.reason.message}
						</span>
					)}
				</Col>
				<Col lg="12" className="mb-5">
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Indiquez nous en détail vos disponibilités pour un rendez-vous en agence ou par visioconférence."
						className={
							!errors.details
								? 'form-control'
								: 'form-control is-invalid'
						}
						{...register('details', {
							required:
								'Vous devez indiquer le details de votre demande.',
							maxLength: 256,
						})}
					/>
					{errors?.details && (
						<span className="invalid-feedback fw-bold">
							{errors.details.message}
						</span>
					)}
				</Col>
				<Col lg="12" className="d-flex justify-content-center">
					<BtnGeneral type="submit" text="Envoyer" className="w-50" />
				</Col>
			</Row>
		</form>
	)
}

export default AppointmentForm
