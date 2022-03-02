import React from 'react'

const Input = ({ id, type, placeholder, onChange, onBlur }) => {
	return (
		<input
			id={id}
			className="form-control rounded-pill"
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
		/>
	)
}

export default Input
