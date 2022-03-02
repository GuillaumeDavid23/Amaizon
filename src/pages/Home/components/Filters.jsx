import Input from '../../../templates/Input'
import { useState, useEffect } from 'react'
import { Col, Container, Row, Dropdown } from 'react-bootstrap'

const Filters = ({ setProperties }) => {
	const [transactionType, setTransactionType] = useState('')
	const [propertyType, setPropertyType] = useState('')
	const [location, setLocation] = useState('')
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')
	const [roomNumber, setRoomNumber] = useState('')
	const [surface, setSurface] = useState('')

	const handleTransactionType = (e) => {
		setTransactionType(e.target.value)
	}

	const handlePropertyType = (e) => {
		setPropertyType(e.target.value)
	}

	const handleLocation = (e) => {
		setLocation(e.target.value)
	}

	const handleMinPrice = (e) => {
		setMinPrice(e.target.value)
	}

	const handleMaxPrice = (e) => {
		setMaxPrice(e.target.value)
	}

	const handleRoomNumber = (e) => {
		setRoomNumber(e.target.value)
	}

	const handleSurface = (e) => {
		setSurface(e.target.value)
	}

	useEffect(() => {
		let filters = {
			transactionType,
			propertyType,
			location,
			minPrice,
			maxPrice,
			roomNumber,
			surface,
		}

		fetch(
			process.env.REACT_APP_API_DOMAIN + 'api/property/searchProperties',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(filters),
			}
		)
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setProperties(response.data)
			})
	}, [
		transactionType,
		propertyType,
		location,
		minPrice,
		maxPrice,
		roomNumber,
		surface,
		setProperties,
	])

	return (
		<Container className="d-flex justify-content-center p-4">
			<Row
				id="filters"
				className="d-none d-lg-flex justify-content-around p-4 rounded-pill "
			>
				<Col xs="10" lg="2">
					<select
						className="form-select rounded-pill"
						onChange={handleTransactionType}
						name="transactionType"
						id="transactionType"
					>
						<option value="">Acheter ou Louer</option>
						<option value="Achat">Acheter</option>
						<option value="Location">Louer</option>
					</select>
				</Col>
				<Col xs="10" lg="2">
					<select
						className="form-select rounded-pill"
						onChange={handlePropertyType}
						name="propertyType"
						id="propertyType"
					>
						<option value="">Type de bien</option>
						<option value="Maison">Maison</option>
						<option value="Appartement">Appartement</option>
					</select>
				</Col>
				<Col xs="5" lg="2">
					<Input
						id="location"
						type="text"
						placeholder="Localisation"
						onBlur={handleLocation}
					/>
				</Col>
				<Col xs="5" lg="1">
					<Input
						id="minPrice"
						type="text"
						placeholder="Prix Min"
						onChange={handleMinPrice}
					/>
				</Col>
				<Col xs="5" lg="1">
					<Input
						id="maxPrice"
						type="text"
						placeholder="Prix Max"
						onChange={handleMaxPrice}
					/>
				</Col>
				<Col xs="5" lg="1">
					<Input
						id="roomNumber"
						type="number"
						placeholder="Pièces"
						onChange={handleRoomNumber}
					/>
				</Col>
				<Col xs="5" lg="1">
					<Input
						id="surface"
						type="number"
						placeholder="Surface"
						onChange={handleSurface}
					/>
				</Col>

				{/* <Dropdown>
					<Dropdown.Toggle variant="light" id="dropdown-basic">
						Prix Min/Max
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>
							<Input
								id="minPrice"
								type="text"
								placeholder="Prix Min"
								onChange={handleMinPrice}
							/>
						</Dropdown.Item>
						<Dropdown.Item>
							<Input
								id="maxPrice"
								type="text"
								placeholder="Prix Max"
								onChange={handleMaxPrice}
							/>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown> */}
			</Row>
			<Row
				id="filters"
				className="d-lg-none justify-content-around p-4 rounded-pill w-100 "
			>
				<Dropdown>
					<Dropdown.Toggle
						className="w-100 dropBtn"
						variant="success"
						id="dropdown-basic"
					>
						Filtre de recherche
					</Dropdown.Toggle>

					<Dropdown.Menu className="w-100 row dropMenu">
						<Col className="mb-3" xs="12" lg="2">
							<select
								className="form-select rounded-pill"
								onChange={handleTransactionType}
								name="transactionType"
								id="transactionType"
							>
								<option value="">Acheter ou Louer</option>
								<option value="Achat">Acheter</option>
								<option value="Location">Louer</option>
							</select>
						</Col>
						<Col className="mb-3" xs="12" lg="2">
							<select
								className="form-select rounded-pill"
								onChange={handlePropertyType}
								name="propertyType"
								id="propertyType"
							>
								<option value="">Type de bien</option>
								<option value="Maison">Maison</option>
								<option value="Appartement">Appartement</option>
							</select>
						</Col>
						<Col className="mb-3" xs="12" lg="2">
							<Input
								id="location"
								type="text"
								placeholder="Localisation"
								onBlur={handleLocation}
							/>
						</Col>
						<Col className="mb-3" xs="12" lg="1">
							<Input
								id="minPrice"
								type="text"
								placeholder="Prix Min"
								onChange={handleMinPrice}
							/>
						</Col>
						<Col className="mb-3" xs="12" lg="1">
							<Input
								id="maxPrice"
								type="text"
								placeholder="Prix Max"
								onChange={handleMaxPrice}
							/>
						</Col>
						<Col className="mb-3" xs="12" lg="1">
							<Input
								id="roomNumber"
								type="number"
								placeholder="Pièces"
								onChange={handleRoomNumber}
							/>
						</Col>
						<Col className="mb-3" xs="12" lg="1">
							<Input
								id="surface"
								type="number"
								placeholder="Surface"
								onChange={handleSurface}
							/>
						</Col>
					</Dropdown.Menu>
				</Dropdown>
			</Row>
		</Container>
	)
}

export default Filters
