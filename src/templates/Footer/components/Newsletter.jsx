import { Col, Form, FormControl, FormLabel } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { Context } from '../../../App'
import { Button } from 'react-bootstrap'

const Newsletter = () => {
	const { userInfos, connected, authToken } = useContext(Context)
	const [isRegistered, setRegistration] = useState(null)
	const [apiResponse, setApiResponse] = useState()

	if (userInfos !== null && isRegistered === null) {
		setRegistration(userInfos.newsletter)
	}

	const setNewsletter = () => {
		if (connected) {
			let domain = process.env.REACT_APP_API_DOMAIN + 'api/user/'
			let method = 'setNewsletter/' + userInfos._id
			let urlToGET = !isRegistered
				? domain + method
				: `${domain}un${method}`
			fetch(urlToGET, {
				method: 'GET',
				headers: { Authorization: 'bearer ' + authToken },
			})
				.then((res) => {
					return res.json()
				})
				.then((res) => {
					if (res.status_code === 200) {
						setApiResponse(res.message)
						setRegistration(isRegistered ? false : true)
					} else {
						setApiResponse('Une erreur est survenue !')
					}
				})
		} else {
			let email = document.querySelector('#emailNewsletter').value
			if (email === '') {
				setApiResponse('Vous devez indiquer votre email !')
			} else if (
				!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
			) {
				setApiResponse('Vous devez indiquez une email valide !')
			} else {
				fetch(
					process.env.REACT_APP_API_DOMAIN +
						'api/user/setNewsletterForUnknown',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json;charset=utf-8',
						},
						body: JSON.stringify({ email }),
					}
				)
					.then((res) => {
						return res.json()
					})
					.then((res) => {
						if (res.status_code === 200) {
							setApiResponse(res.message)
						} else {
							setApiResponse('Une erreur est survenue !')
						}
					})
			}
		}
	}

	return (
		<Col xs="8" lg="2" className="text-center m-3 m-lg-0">
			<Form>
				<div>
					<FormLabel className="fw-bold">
						{isRegistered
							? 'Se désinscrire de la newsletter:'
							: 'Inscrivez-vous à la newsletter:'}
					</FormLabel>
				</div>
				{!connected && (
					<FormControl
						id="emailNewsletter"
						type="email"
						placeholder="name@example.com"
					/>
				)}
				{apiResponse && <div>{apiResponse}</div>}
				<Button className="header-btn my-2" onClick={setNewsletter}>
					Go
				</Button>
			</Form>
		</Col>
	)
}

export default Newsletter
