import * as React from 'react'
import * as Bootstrap from 'react-bootstrap'

import { useForm } from 'react-hook-form'

export const MyInfo = (props) => {
	const { user, roundness, token } = props

	const {
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log('MyInfo::onSubmit_data')
		console.log(data)

		const updatedUser = { ...userInfo, ...data }

		console.log('MyInfo::UpdatedUser')
		console.log(updatedUser)

		// Locking form

		// Set loading button
		setIsLoading(true)

		// Call UpdateUser API
		let init = {
			method: 'PUT',
			headers: {
				Authorization: 'bearer ' + token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedUser),
		}

		fetch(
			process.env.REACT_APP_API_DOMAIN + 'api/user/buyer/' + updatedUser._id,
			{ ...init }
		)
			.then((response) => {
				if (response.status[0] == 2) {
					// set local changes
					setUserInfo(updatedUser)
				}
			})
			.catch((error) => {
				// Print error message
				console.error(error)
			})

		setIsLoading(false)

		// Unlock form
		setIsModifying(false)
	}

	const [userInfo, setUserInfo] = React.useState(user)
	const [tmpUserInfo, setTmpUserInfo] = React.useState(user)

	const [isLoading, setIsLoading] = React.useState(false)
	const [isModifying, setIsModifying] = React.useState(false)

	const style = {
		borderRadius: roundness ? roundness : '0px',
	}

	return (
		<Bootstrap.Container className={`bo_subcontainer`} style={style}>
			{console.log(userInfo)}
			<Bootstrap.Row>
				<Bootstrap.Col>
					<h2>Mes informations personnelles</h2>
				</Bootstrap.Col>
			</Bootstrap.Row>
			<Bootstrap.Row>
				<Bootstrap.Col
					style={
						isModifying
							? { display: 'flex', flexDirection: 'column' }
							: {}
					}
				>
					{isModifying ? (
						<>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<label>Prénom : </label>
									<input
										value={tmpUserInfo.firstname}
										{...register('firstname', {
											required: true,
										})}
										onChange={(e) => {
											setTmpUserInfo({
												...tmpUserInfo,
												firstname: e.target.value,
											})
										}}
									/>
									{errors.firstname &&
										errors.firstname.type ===
											'required' && (
											<span
												role="alert"
												style={{
													color: 'red',
													fontSize: '1rem',
												}}
											>
												Ce champs est requis
											</span>
										)}
									<label>Nom : </label>
									<input
										value={tmpUserInfo.lastname}
										{...register('lastname', {
											required: true,
										})}
										onChange={(e) => {
											setTmpUserInfo({
												...tmpUserInfo,
												lastname: e.target.value,
											})
										}}
									/>
									{errors.lastname &&
										errors.lastname.type === 'required' && (
											<span
												role="alert"
												style={{
													color: 'red',
													fontSize: '1rem',
												}}
											>
												Ce champs est requis
											</span>
										)}
									<label>Téléphone : </label>

									<input
										value={tmpUserInfo.phone}
										{...register('phone', {
											pattern:
												/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
										})}
										onChange={(e) => {
											setTmpUserInfo({
												...tmpUserInfo,
												phone: e.target.value,
											})
										}}
									/>
									{errors.phone && (
										<p
											style={{
												color: 'red',
												marginBottom: '0',
												fontSize: '1rem',
											}}
										>
											Le format du numéro de téléphone est
											incorrecte
										</p>
									)}
									<label>Email : </label>
									<input
										value={tmpUserInfo.email}
										{...register('email', {
											required: true,
											pattern:
												/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
										})}
										onChange={(e) => {
											setTmpUserInfo({
												...tmpUserInfo,
												email: e.target.value,
											})
										}}
									/>
									{errors.email &&
										errors.email.type === 'required' && (
											<span
												role="alert"
												style={{
													color: 'red',
													fontSize: '1rem',
												}}
											>
												Ce champs est requis
											</span>
										)}
									{errors.email &&
										errors.email.type === 'pattern' && (
											<p
												style={{
													color: 'red',
													marginBottom: '0',
													fontSize: '1rem',
												}}
											>
												Le format de l'adresse mail est
												incorrecte
											</p>
										)}
								</div>
							</form>
						</>
					) : (
						<>
							<p className={``}>
								{userInfo?.firstname} {userInfo?.lastname}
							</p>
							<p className={``}>{userInfo?.phone}</p>
							<p className={``}>{userInfo?.email}</p>
						</>
					)}
				</Bootstrap.Col>
			</Bootstrap.Row>
			<Bootstrap.Row>
				{isModifying ? (
					<>
						<Bootstrap.Col
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}
						>
							<Bootstrap.Button
								className={`bo_pref_text bo_pref_btn`}
								onClick={() => {
									resetForm()
									setTmpUserInfo(userInfo)
									setIsModifying(false)
								}}
							>
								Annuler
							</Bootstrap.Button>
							{isLoading ? (
								<Bootstrap.Spinner
									animation="border"
									role="status"
								></Bootstrap.Spinner>
							) : (
								<Bootstrap.Button
									className={`bo_pref_text bo_pref_btn`}
									onClick={handleSubmit(onSubmit)}
								>
									Enregistrer
								</Bootstrap.Button>
							)}
						</Bootstrap.Col>
					</>
				) : (
					<>
						<Bootstrap.Col
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}
						>
							<Bootstrap.Button
								className={`bo_pref_text bo_pref_btn`}
								onClick={() => {
									setIsModifying(true)
								}}
							>
								Modifier
							</Bootstrap.Button>
						</Bootstrap.Col>
					</>
				)}
			</Bootstrap.Row>
		</Bootstrap.Container>
	)
}
