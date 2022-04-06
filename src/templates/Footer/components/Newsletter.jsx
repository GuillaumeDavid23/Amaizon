import { Col, Form, FormControl, FormLabel } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../../../App'
import { Button } from 'react-bootstrap'

const Newsletter = () => {
	const { userInfos, connected } = useContext(Context)

	const setNewsletter = () => {
		if (connected) {
			let domain = process.env.REACT_APP_API_DOMAIN + 'api/user/'
			let method = 'setNewsletter/' + userInfos._id
			if (!userInfos.newsletter) {
				fetch(domain + method)
					.then((res) => {
						return res.json()
					})
					.then((res) => {
						console.log(res)
					})
			} else {
				fetch(`${domain}un${method}`)
					.then((res) => {
						return res.json()
					})
					.then((res) => {
						console.log(res)
					})
			}
		} else {
			console.log('setNewsforunknown')
		}
	}

	return (
		<Col xs="8" lg="2" className="text-center m-3 m-lg-0">
			<Form>
				<div>
					<FormLabel className="fw-bold">
						Inscrivez-vous à la newsletter:
					</FormLabel>
				</div>
				{!connected && (
					<FormControl type="email" placeholder="name@example.com" />
				)}
				<Button className="header-btn my-2" onClick={setNewsletter}>
					Go
				</Button>
			</Form>
		</Col>
	)
}

export default Newsletter
