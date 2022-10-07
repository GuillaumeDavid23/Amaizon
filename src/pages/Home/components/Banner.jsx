import BtnGeneral from "../../../templates/BtnGeneral"
import { Link } from 'react-router-dom'
import { Col, Row } from "react-bootstrap"

const Banner = (props) => {
	return (
		<div className="homeBanner d-flex flex-column justify-content-evenly">
			<div className="w-75">
				<h1 className="text-center fw-bold">
					Le meilleur moyen de trouver la maison de vos rêves ?
				</h1>
			</div>
			<Row className="mt-3 flex-column justify-content-between align-items-center w-75">
				<Col xs={3} className="text-center">
					<Link
						to={`/contactus`}
						className="LinkBtn"
						style={{ width: 'fit-content' }}
					>
						<BtnGeneral
							className="BtnBanner"
							text="Contactez-nous"
						/>
					</Link>
				</Col>
				<Col xs={1}>
					<p className="m-0 p-0 text-center">OU</p>
				</Col>
				<Col xs={3} className="text-center">
					<Link
						to={`/announces`}
						className="LinkBtn"
						style={{ width: 'fit-content' }}
					>
						<BtnGeneral
							className="BtnBanner"
							text="Voir nos annonces"
						/>
					</Link>
				</Col>
			</Row>
		</div>
	)
}

export default Banner
