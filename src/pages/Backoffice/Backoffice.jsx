import * as React from 'react'

import {Context} from "../../App.jsx"

import '../../styles/Backoffice.css'
import * as bt from 'react-bootstrap'

import { Prefs, MyAgent, MyInfo, MyFavs } from './components'

const Backoffice = () => {
	const {userInfos:user, setUserInfo:setUser, authToken:token} = React.useContext(Context)

	console.log(user)

	const agent = user?.buyer?.agent ? user.buyer.agent : null

	return (
		<>
		<bt.Container
					style={{
						margin: '2rem 0',
					}}
				>
					<bt.Row
						style={{
							margin: '0 3rem',
							justifyContent: 'space-between',
						}}
					>
						<bt.Col className={``} sm={7}>
							<Prefs user={user} setUser={setUser} token={token}/>
						</bt.Col>
						<bt.Col className={``} sm={4}>
							<MyAgent agent={agent} roundness="30px" />
						</bt.Col>
					</bt.Row>
					<bt.Row
						style={{
							margin: '0 3rem',
							justifyContent: 'space-between',
						}}
					>
						<bt.Col className={``} sm={7}>
							<MyFavs user={user} setUser={setUser} token={token} roundness="30px" />
						</bt.Col>
						<bt.Col className={``} sm={4}>
							<MyInfo
								user={user}
								setUser={setUser}
								token={token}
								roundness="30px"
							/>
						</bt.Col>
					</bt.Row>
				</bt.Container>

		
		</>
	)
}

export default Backoffice
