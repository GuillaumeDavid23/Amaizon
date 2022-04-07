import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import ForgetPassAfterForm from './ForgetPassAfterForm'

const ForgetPassAfter = () => {
	const { id, token } = useParams()
	const [checkToken, setCheckToken] = useState(true)

	useEffect(() => {
		try {
			fetch(
				process.env.REACT_APP_API_DOMAIN +
					'api/user/checkTokenResetPassword',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
					},
					body: JSON.stringify({ id, token }),
				}
			)
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					if (response.status_code !== 200) {
						setCheckToken(false)
					}
				})
		} catch (error) {
			console.log(error)
		}
	}, [id, token])

	if (checkToken) {
		return <ForgetPassAfterForm id={id} />
	} else {
		return (
			<div className="d-flex justify-content-center mt-3">
				<Alert className="text-center w-50" variant="danger">
					Identifiant ou Jeton invalide
				</Alert>
			</div>
		)
	}
}

export default ForgetPassAfter
