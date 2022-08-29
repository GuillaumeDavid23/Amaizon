import * as React from 'react'
import * as Bootstrap from 'react-bootstrap'

import { useForm } from 'react-hook-form'

import './Preferences.css'

const handle_no_value = (value, price = false, surface = false) => {
	if (value === '') return 'Non défini'
	if (price) return value ? value + ' €' : '- €'
	if (surface) return value ? value + ' m²' : '- m²'
	return value ? value : '-'
}

const getURLUpdate = (userId) => {
	const URL = process.env.REACT_APP_API_DOMAIN + 'api/user/buyer/' + userId
	return URL
}

export const Prefs = (props) => {
	const {
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors },
	} = useForm()

	const {user, token, setUser } = props

	const [isModifying, setIsModifying] = React.useState(false)
	const [isFetching, setIsFetching] = React.useState(false)

	const [Pref, setPrefs] = React.useState()
	const [tmpPrefs, setTmpPrefs] = React.useState()

	React.useEffect(()=>{
		if(!Pref){
			setPrefs(user?.buyer)
		}
		if(!tmpPrefs){
			setTmpPrefs(user?.buyer)
		}

	}, [user, Prefs, tmpPrefs])

	const onSubmitFetch = (data) => {
		setIsFetching(true)

		const updatedUser = {...user, buyer:{...user.buyer, ...data}}

		const init = {
			method: 'PUT',
			headers: {
				Authorization: 'bearer ' + token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedUser),
		}

		fetch(getURLUpdate(user._id), {...init})
			.then((rep) => {
				rep.json().then(() => {
					setUser(updatedUser)

					setPrefs(data)

					setIsModifying(false)
				})
			})
			.catch((err) => {
				console.error(err)
			}).finally(()=>{
				setIsFetching(false)
			})
	}

	return (
		<>
			<Bootstrap.Container className={`bo_pref_main`}>
				<Bootstrap.Row>
					<h2
						style={{
							fontSize: '2rem',
							padding: '1rem 0',
							marginLeft: '2rem',
						}}
						className={`bo_pref_text`}
					>
						Mes préférences d'alerte
					</h2>
				</Bootstrap.Row>
				<Bootstrap.Row
					style={{
						marginLeft: '2rem',
					}}
				>
					{isModifying ? (
						// Form
						<form onSubmit={handleSubmit(onSubmitFetch)}>
							<div style={{ display: 'flex' }}>
								<Bootstrap.Col className={`bo_text`}>
									<div className={`bo_pref_subform`}>
										{/* Transaction type */}
										<label>Transaction : </label>
										<select
											value={tmpPrefs.type}
											{...register('type')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													type: e.target.value,
												})
											}}
										>
											<option value=""></option>
											<option value="Achat">Achat</option>
											<option value="Location">
												Location
											</option>
										</select>

										{/* Type */}
										<label>Type : </label>
										<select
											value={tmpPrefs.propertyType}
											{...register('propertyType')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													propertyType: e.target.value,
												})
											}}
										>
											<option value=""></option>
											<option value="Maison">
												Maison
											</option>
											<option value="Appartement">
												Appartement
											</option>
										</select>

										{/* Location */}
										<label>Localisation : </label>
										<input
											type="text"
											value={tmpPrefs.city}
											{...register('city')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													city: e.target.value,
												})
											}}
										/>
									</div>
								</Bootstrap.Col>
								<Bootstrap.Col className={`bo_text`}>
									<div className={`bo_pref_subform`}>
										{/* Budget */}
										<label>Budget : </label>
										<input
											type="number"
											value={tmpPrefs.budgetMax}
											{...register('budgetMax')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													budgetMax: e.target.value,
												})
											}}
										/>

										{/* Rooms */}
										<label>Nombre de pièces : </label>
										<input
											type="number"
											value={tmpPrefs.rooms}
											{...register('rooms')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													rooms: e.target.value,
												})
											}}
										/>

										{/* Surface */}
										<label>Surface : </label>
										<input
											type="number"
											value={tmpPrefs.surfaceMin}
											{...register('surfaceMin')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													surfaceMin: e.target.value,
												})
											}}
										/>
									</div>
								</Bootstrap.Col>
							</div>
						</form>
					) : (
						// Show Preferences
						<>
							<Bootstrap.Col>
								<p className={`bo_pref_p bo_pref_text`}>
									Vente/Location :{' '}
									{handle_no_value(Pref?.type)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Type de bien : {handle_no_value(Pref?.propertyType)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Localisation :{' '}
									{handle_no_value(Pref?.city)}
								</p>
							</Bootstrap.Col>
							<Bootstrap.Col>
								<p className={`bo_pref_p bo_pref_text`}>
									Budget :{' '}
									{handle_no_value(Pref?.budgetMax, true, false)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Nombre de pièces :{' '}
									{handle_no_value(Pref?.rooms)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Surface :{' '}
									{handle_no_value(
										Pref?.surfaceMin,
										false,
										true
									)}
								</p>
							</Bootstrap.Col>
						</>
					)}
				</Bootstrap.Row>

				{/* Action Buttons */}
				<Bootstrap.Row
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginRight: '3rem',
					}}
				>
					{isModifying ? (
						<>
							<Bootstrap.Button
								className={`bo_pref_text bo_pref_btn custom-btn m-3`}
								onClick={() => {
									resetForm()
									setIsModifying(false)
								}}
							>
								Annuler
							</Bootstrap.Button>
							<Bootstrap.Button
								className={`bo_pref_text bo_pref_btn custom-btn mb-3 mt-3`}
								onClick={handleSubmit(onSubmitFetch)}
							>
								{isFetching ? (
									<Bootstrap.Spinner />
								) : (
									'Enregistrer'
								)}
							</Bootstrap.Button>
						</>
					) : (
						<Bootstrap.Button
							className={`bo_pref_text bo_pref_btn custom-btn mb-3`}
							onClick={() => {
								setIsModifying(true)
							}}
						>
							Modifier
						</Bootstrap.Button>
					)}
				</Bootstrap.Row>
			</Bootstrap.Container>
		</>
	)
}
