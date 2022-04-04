const user = {
	email: 'b_rault@outlook.fr',
	password: 'Azertyuiop2022',
}

export const connect_user = async () => {
	let init = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	}

	try {
		const res = await fetch('http://localhost:8080/api/user/login', {
			...init,
		})

		const data = await res.json()

		return { token: data.token, id: data.userId }
	} catch (error) {
		console.error(error)
		return null
	}
}

export const getUser = async () => {
	const { id, token } = await connect_user()
	let init = {
		method: 'GET',
		headers: {
			Authorization: 'bearer ' + token,
			'Content-Type': 'application/json',
		},
	}

	try {
		const res = await fetch('http://localhost:8080/api/user/' + id, {
			...init,
		})

		if (res.status === 200) {
			const user = await res.json()
			return user.data
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
