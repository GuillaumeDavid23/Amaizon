import * as React from 'react'
import * as Bootstrap from 'react-bootstrap'

const FavListItem = (props) => {
	const { fav, remove } = props

	const [confirmSuppr, setConfirmSuppr] = React.useState(false)

	return (
		<Bootstrap.Row
			key={fav._id}
			style={{
				margin: '1rem 0',
			}}
		>
			<Bootstrap.Col
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<h2 style={{ textAlign: 'center' }}>
					{fav.ref} &gt; {fav.title} - {fav.price}€
				</h2>
			</Bootstrap.Col>
			<Bootstrap.Col
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				{confirmSuppr ? (
					<>
						<Bootstrap.Button
							className={`bo_btn`}
							onClick={() => setConfirmSuppr(false)}
						>
							Annuler
						</Bootstrap.Button>
						<Bootstrap.Button
							className={`bo_btn`}
							onClick={() => {
								remove(fav._id)
								setConfirmSuppr(false)
							}}
						>
							Supprimer
						</Bootstrap.Button>
					</>
				) : (
					<Bootstrap.Button
						className={`bo_btn`}
						onClick={() => setConfirmSuppr(true)}
					>
						Retirer des favoris
					</Bootstrap.Button>
				)}
			</Bootstrap.Col>
		</Bootstrap.Row>
	)
}

export const MyFavs = (props) => {
	const { favs, roundness } = props

	const [listFavs, setListFavs] = React.useState(favs ? favs : [])

	const removeFav = (fav_id) => {
		setListFavs(listFavs.filter((item) => item._id !== fav_id))
	}

	const style = {
		borderRadius: roundness ? roundness : '0px',
	}

	return (
		<Bootstrap.Container className={`bo_subcontainer`} style={style}>
			<Bootstrap.Row>
				<Bootstrap.Col>
					<h2>Mes offres favorites :</h2>
				</Bootstrap.Col>
			</Bootstrap.Row>
			<Bootstrap.Row className={`bo_scrollable`}>
				{listFavs.length > 0 ? (
					listFavs.map((fav) => {
						return (
							<FavListItem
								key={fav._id}
								fav={fav}
								remove={removeFav}
							/>
						)
					})
				) : (
					<Bootstrap.Col
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<h2 style={{ textAlign: 'center' }}>
							Pas encore de bien en favoris
						</h2>
					</Bootstrap.Col>
				)}
			</Bootstrap.Row>
		</Bootstrap.Container>
	)
}
