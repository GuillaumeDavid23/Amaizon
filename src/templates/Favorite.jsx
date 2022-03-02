import React from 'react'
import '../styles/Favorite.css'


const Favorite = (props) => {
    
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImJ1eWVyIjp7Indpc2hsaXN0IjpbXSwiYnVkZ2V0TWluIjoxMDAwMDAsImJ1ZGdldE1heCI6MTUwMDAwLCJjaXR5IjoiQW1pZW5zIiwic3VyZmFjZU1pbiI6NTAsInN1cmZhY2VNYXgiOjEyMCwidHlwZSI6Ik1haXNvbiJ9LCJfaWQiOiI2MjBlMTcwNTkwNmY5YjFiYzFhZGY3NjgiLCJmaXJzdG5hbWUiOiJIZW5yeSIsImxhc3RuYW1lIjoiR3VpZSIsImVtYWlsIjoiaGVucnlAdGVzdC5mciIsInBhc3N3b3JkIjoiJDJiJDEwJHlMakM1NjVDTERrcGNmRmt5bnRFRGVkdm9rb05WWC94bGVMV0xTSEpxaVQ4MS9xelVZRC8yIiwibmV3c2xldHRlciI6dHJ1ZSwic3RhdHVzIjp0cnVlLCJyZWYiOiIyNTY0R0Q1NjU2IiwiY3JlYXRlZEF0IjoiMjAyMi0wMi0xN1QwOTozNjowNS4yNjVaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0wMlQwOTo0NTozNS4wNjRaIiwiX192IjowfSwiaWF0IjoxNjQ2MjE0MzgwLCJleHAiOjE2NDYzMDA3ODB9.sv5cwK4vEQvtvXG9rM63zm2-0FaYQ5f9inEsjJfdhe8'

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
