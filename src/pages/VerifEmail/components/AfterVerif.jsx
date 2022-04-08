import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AfterVerif = () => {
	const token = useParams().token
	const [apiResponse, setApiResponse] = useState()

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_API_DOMAIN}api/user/emailVerification/${token}`
		)
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setApiResponse(response.status_code)
			})
	}, [])

	return (
		<Container
			className="bo_subcontainer w-50"
			style={{ borderRadius: '30px' }}
		>
			{apiResponse === 200 && (
				<>
					<p className="text-center">
						Félicitations, vous êtes désormais vérifié !
					</p>
					<p className="text-center">
						N'hésitez pas à nous contacter via la page de Contact !
					</p>
				</>
			)}
			{apiResponse === 204 && (
				<>
					<p className="text-center">
						Les informations de connexion ne correspondent à aucun
						utilisateur.
					</p>
					<p className="text-center">
						Vous pouvez vous reconnecter pour regénerer un email
						avec un bon lien !
					</p>
				</>
			)}
			{apiResponse === 500 && (
				<>
					<p className="text-center">Erreur Serveur !</p>
					<p className="text-center">
						N'hésitez pas à nous contacter via la page de Contact en
						cas de persistance !
					</p>
				</>
			)}
			<Link to="/" className="d-flex justify-content-center mt-3">
				<Button className="btn-general" style={{ width: '200px' }}>
					Retour à la page d'accueil
				</Button>
			</Link>
		</Container>
	)
}

export default AfterVerif
