import React from 'react'
import '../styles/Favorite.css'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import Flash from './Flash'

import { Context } from '../App'

const Favorite = (props) => {
	const [showMessage, setShowMessage] = useState(false)

	const token = useContext(Context).authToken
	const isConnected = useContext(Context).connected

	function handleClick() {
		if (isConnected) {
			props.setFav(!props.default)

			if (!props.default) {
				addFav()
			} else {
				removeFav()
			}
		} else {
			setShowMessage(true)
			setTimeout(() => setShowMessage(false), 5000)
		}
	}
	useEffect(() => {
		setShowMessage(false)
	}, [])
	function addFav() {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'bearer ' + token,
			},
		}

		fetch(
			'http://localhost:8080/api/user/wishlist/' + props.id,
			requestOptions
		).then(function (response) {})
	}

	function removeFav() {
		const requestOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'bearer ' + token,
			},
		}

		fetch(
			'http://localhost:8080/api/user/wishlist/' + props.id,
			requestOptions
		).then(function (response) {})
	}

	let animationClasses = props.default ? 'is-active' : ''
	let moreClass = props.className ? props.className : ''

	return (
		<div>
			<Flash
				show={showMessage}
				className="alert-warning"
				message="Veuillez vous connecter pour ajouter un favori"
			/>
			<div
				className={`heart ${animationClasses} ${moreClass}`}
				onClick={handleClick}
			></div>
		</div>
	)
}

export default Favorite
