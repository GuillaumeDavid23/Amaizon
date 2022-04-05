import * as React from 'react'

import '../../styles/Backoffice.css'
import * as bt from 'react-bootstrap'

import * as util from './components/utils'

import data from './data.json'

import { Prefs, MyAgent, MyInfo, MyFavs } from './components'

const Backoffice = () => {
	const { agent: dataAgent, prefs: dataPrefs, favs: dataFavs } = data

	// const red = React.useReducer()

	const [user, setUser] = React.useState()
	const [token, setToken] = React.useState()

	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		util.getUser().then((res) => {
			console.log('User logged in')

			setUser(res.user)
			setToken(res.token)

			setIsLoading(false)
		})
	}, [])

	return (
		<>
			{isLoading ? (
				<bt.Spinner animation="border" role="status"></bt.Spinner>
			) : (
				<bt.Container
					style={{
						margin: '2rem 0',
					}}
				>
					{console.log('Backoffice::states', user, token)}
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
							<MyInfo
								user={user}
								token={token}
								roundness="30px"
							/>
						</bt.Col>
					</bt.Row>
				</bt.Container>
			)}
		</>
	)
}

export default Backoffice
