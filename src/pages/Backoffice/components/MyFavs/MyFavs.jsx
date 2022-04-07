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
					{fav.propertyRef} &gt; {fav.title} - {fav.amount}€
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
	const { user, setUser, token, roundness } = props
	
	const [listFavs, setListFavs] = React.useState()

	React.useEffect(()=>{
		if(!listFavs){
			setListFavs(user?.buyer?.wishlist)
		}
	}, [user, listFavs])

	const removeFav = (fav_id) => {
		const new_favs = listFavs.filter((item) => item._id !== fav_id)
		const updated_user = {...user, buyer:{...user.buyer, wishlist:new_favs}}

		console.log(updated_user)

		const init = {
			method: 'PUT',
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updated_user)
		}

		// API Call
		fetch(process.env.REACT_APP_API_DOMAIN+"api/user/buyer/"+user._id, {...init}).then((res)=>{
			// If Success, update local
			if(res.ok){
				setListFavs(new_favs)
				setUser(updated_user)
			}else{
				console.log(res)
			}
			
		}).catch(err=>{
			// If fail, don't do anything.
			console.error(err)
		})


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
				{listFavs && listFavs.length > 0 ? (
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
