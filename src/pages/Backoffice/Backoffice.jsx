import * as React from 'react'

import '../../styles/Backoffice.css'
import * as bt from 'react-bootstrap'

import * as util from './components/utils'

import data from './data.json'

import { Prefs, MyAgent, MyInfo, MyFavs } from './components'

const Backoffice = () => {
	const {
		user: dataUser,
		agent: dataAgent,
		prefs: dataPrefs,
		favs: dataFavs,
	} = data

	const [token, setToken] = React.useState()

	React.useEffect(() => {
		const handleConnect = async () => {
			const tok = await util.connect_user()
			setToken(tok)
		}
		handleConnect()
	}, [])

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
						<Prefs prefs={dataPrefs} />
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
						<MyFavs favs={dataFavs} roundness="30px" />
					</bt.Col>
					<bt.Col className={``} sm={4}>
						<MyInfo user={dataUser} roundness="30px" />
					</bt.Col>
				</bt.Row>
			</bt.Container>
		</>
	)
}

export default Backoffice
