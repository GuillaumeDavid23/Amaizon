export const connect_user = async (email = null, password = null) => {
	const user = {
		email: email ? email : 'b_rault@outlook.fr',
		password: password ? password : 'Bbcwpa469',
	}

	let init = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	}

	try {
		const res = await fetch(
			process.env.REACT_APP_API_DOMAIN + 'api/user/login',
			{
				...init,
			}
		)

		const data = await res.json()

		return { token: data.token, id: data.userId }
	} catch (error) {
		console.error(error)
		return null
	}
}

export const getUser = async (email = null, password = null) => {
	const user = {
		email: email ? email : 'b_rault@outlook.fr',
		password: password ? password : 'Bbcwpa469',
	}

	try {
		const { id, token } = await connect_user(user.email, user.password)

		let init = {
			method: 'GET',
			headers: {
				Authorization: 'bearer ' + token,
				'Content-Type': 'application/json',
			},
		}

		const res = await fetch(
			process.env.REACT_APP_API_DOMAIN + 'api/user/' + id,
			{
				...init,
			}
		)

		if (res.status === 200) {
			const user = await res.json()

			console.log('utils::token', token)
			console.log('utils::user', user.data)

			return { token: token, user: user.data }
		} else {
			console.error(res.status)
			return null
		}
	} catch (error) {
		console.error(error)
		return null
	}
}

export const mockSleep = (delay) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}
