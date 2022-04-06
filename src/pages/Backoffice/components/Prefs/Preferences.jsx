import * as React from 'react'
import * as Bootstrap from 'react-bootstrap'

import { useForm } from 'react-hook-form'

import * as util from '../utils'

import './Preferences.css'

const default_pref = {
	sell: '',
	type: '',
	location: '',
	budget: '',
	rooms: '',
	surface: '',
}

const handle_no_value = (value, price = false, surface = false) => {
	if (value === '') return 'Non défini'
	if (price) return value ? value + ' €' : '- €'
	if (surface) return value ? value + ' m²' : '- m²'
	return value ? value : '-'
}

const getURLUpdate = (userId) => {
	const BASE_URL = 'http://127.0.0.1:8080/api/'
	const URL = BASE_URL + 'user/buyer/' + userId
	console.log(URL)
	return URL
}

export const Prefs = (props) => {
	const {
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors },
	} = useForm()

	const {user:U, prefs } = props

	const [user, setUser] = React.useState(U)

	const [isModifying, setIsModifying] = React.useState(false)
	const [isFetching, setIsFetching] = React.useState(false)
	const [Pref, setPrefs] = React.useState(prefs ? prefs : default_pref)
	const [tmpPrefs, setTmpPrefs] = React.useState(prefs ? prefs : default_pref)


	const onSubmit = (data) => {
		setPrefs(tmpPrefs)
		setIsModifying(false)
	}

	const onSubmitFetch = (data) => {
		setIsFetching(true)

		const init = {
			method: 'PUT',
			headers: {
				Authorization: 'bearer ' + user.token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}
		fetch(getURLUpdate(user.id), init)
			.then((rep) => {
				rep.json().then((data) => {
					console.log(data)

					setPrefs(tmpPrefs)
					setIsModifying(false)
					setIsFetching(false)
				})
			})
			.catch((err) => {
				console.error(err)
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<div style={{ display: 'flex' }}>
								<Bootstrap.Col className={`bo_text`}>
									<div className={`bo_pref_subform`}>
										{/* Transaction type */}
										<label>Transaction : </label>
										<select
											value={tmpPrefs.sell}
											{...register('sell')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													sell: e.target.value,
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
											value={tmpPrefs.location}
											{...register('location')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													location: e.target.value,
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
											value={tmpPrefs.budget}
											{...register('budget')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													budget: e.target.value,
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
											value={tmpPrefs.surface}
											{...register('surface')}
											onChange={(e) => {
												setTmpPrefs({
													...tmpPrefs,
													surface: e.target.value,
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
									{handle_no_value(Pref?.sell)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Type de bien : {handle_no_value(Pref?.type)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Localisation :{' '}
									{handle_no_value(Pref?.location)}
								</p>
							</Bootstrap.Col>
							<Bootstrap.Col>
								<p className={`bo_pref_p bo_pref_text`}>
									Budget :{' '}
									{handle_no_value(Pref?.budget, true, false)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Nombre de pièces :{' '}
									{handle_no_value(Pref?.rooms)}
								</p>
								<p className={`bo_pref_p bo_pref_text`}>
									Surface :{' '}
									{handle_no_value(
										Pref?.surface,
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
								className={`bo_pref_text bo_pref_btn`}
								onClick={() => {
									resetForm()
									setIsModifying(false)
								}}
							>
								Annuler
							</Bootstrap.Button>
							<Bootstrap.Button
								className={`bo_pref_text bo_pref_btn`}
								onClick={handleSubmit(onSubmit)}
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
							className={`bo_pref_text bo_pref_btn`}
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
