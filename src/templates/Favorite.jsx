import React from 'react'
import '../styles/Favorite.css'


const Favorite = (props) => {
    const token = props.token

	function handleClick() {
        props.setFav(!props.default)

		if (!props.default) {
			addFav()
		} else {
			removeFav()
		}
	}

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
		).then(function (response) {
		})
	}

    
    let animationClasses = props.default ? 'is-active' : ''
    let moreClass = props.className ? props.className : ''

	return(
        <div
            className={`heart ${animationClasses} ${moreClass}`}
            onClick={handleClick}
        ></div>
    )
	
}

export default Favorite
