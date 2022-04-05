import * as Bootstrap from 'react-bootstrap'

import { BubblePic } from '../../../../templates/BubblePic'

const getFirstLetters = (firstname, lastname) => {
	return firstname.charAt(0) + '.' + lastname.charAt(0)
}

export const MyAgent = (props) => {
	const { agent } = props

	return (
		<Bootstrap.Container
			style={{
				backgroundColor: '#ece6de',
				borderRadius: '30px',
				border: '1px solid black',
				padding: '2rem',
			}}
			className={`bo_pref_text`}
		>
			{/* Section Title */}
			<Bootstrap.Row style={{ paddingBottom: '2rem' }}>
				<h2>Mon conseiller en agence :</h2>
			</Bootstrap.Row>

			{/* Agent Info */}
			<Bootstrap.Row>
				{agent ? (
					<>
						{/* Informations */}
						<Bootstrap.Col>
							<p className={`bo_pref_p`}>
								{agent.firstname + ' ' + agent.lastname}
							</p>
							<p className={`bo_pref_p`}>{agent.phone}</p>
							<p className={`bo_pref_p`}>{agent.email}</p>
						</Bootstrap.Col>

						{/* Profil pic */}
						<Bootstrap.Col
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							{agent?.profile_pic ? null : (
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									<BubblePic
										text={getFirstLetters(
											agent.firstname,
											agent.lastname
										)}
									/>
								</div>
							)}
						</Bootstrap.Col>
					</>
				) : (
					<p className={`bo_pref_p`} style={{ textAlign: 'center' }}>
						Aucun agent encore attibué
					</p>
				)}
			</Bootstrap.Row>
		</Bootstrap.Container>
	)
}
