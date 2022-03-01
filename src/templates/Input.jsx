import React from 'react'

const Input = ({ id, type, placeholder, onBlur }) => {
	return (
		<input
			id={id}
			className="rounded-pill"
			type={type}
			placeholder={placeholder}
			onBlur={onBlur}
		/>
	)
}

export default Input
