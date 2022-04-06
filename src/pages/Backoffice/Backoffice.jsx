import * as React from 'react'

import {Context} from "../../App.jsx"

import '../../styles/Backoffice.css'
import * as bt from 'react-bootstrap'

import data from './data.json'

import { Prefs, MyAgent, MyInfo, MyFavs } from './components'

const Backoffice = () => {
	const { agent: dataAgent, prefs: dataPrefs } = data

	const {userInfos:user, setUserInfo:setUser, authToken:token} = React.useContext(Context)

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
							<Prefs user={user} setUser={setUser} prefs={dataPrefs} />
						</bt.Col>
						<bt.Col className={``} sm={4}>
							<MyAgent agent={dataAgent} roundness="30px" />
						</bt.Col>
					</bt.Row>
					<bt.Row
						style={{
							margin: '0 3rem',
							justifyContent: 'space-between',
						}}
					>
						<bt.Col className={``} sm={7}>
							<MyFavs user={user} setUser={setUser} roundness="30px" />
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
