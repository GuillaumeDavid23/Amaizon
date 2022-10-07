import BtnGeneral from "../../../templates/BtnGeneral"
import { Link } from 'react-router-dom'
import { Col, Row } from "react-bootstrap"
import logoFull from '../../../assets/logoFull.png'


const Banner = (props) => {
	return (
		<div className="homeBanner d-flex flex-column justify-content-evenly">
			<div className="text-center d-flex flex-column w-50 ms-5">
				<img src={logoFull} className="d-block d-md-none w-75 align-self-center" alt="" />
				<img src={logoFull} className="d-none d-md-block w-50 align-self-center" alt="" />
				<h1 className="text-center fw-bold">
					Le meilleur moyen de trouver la maison de vos rêves ?
				</h1>
			</div>
			<Row className="ms-5 mt-3 flex-column flex-md-row justify-content-center align-items-center w-50">
				<Col xs={5} className="text-center">
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
				<Col xs={2} className="text-center">
					<p className="m-0 p-0 text-center fw-bold">OU</p>
				</Col>
				<Col xs={5} className="text-center">
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
