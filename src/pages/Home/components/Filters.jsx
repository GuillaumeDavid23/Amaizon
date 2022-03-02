import Input from '../../../templates/Input'
import { Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'

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

	const filtering = () => {
		let filters = {
			transactionType,
			propertyType,
			location,
			minPrice,
			maxPrice,
			roomNumber,
			surface,
		}

		fetch(window.env.API_DOMAIN + 'property/searchProperties', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(filters),
		})
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setProperties(response.data)
			})
	}

	useEffect(() => {
		filtering()
	}, [
		transactionType,
		propertyType,
		location,
		minPrice,
		maxPrice,
		roomNumber,
		surface,
	])

	return (
		<div className="d-flex justify-content-center p-4">
			<div
				id="filters"
				className="d-flex justify-content-around w-75 p-4 rounded-pill"
			>
				<select
					className="form-select rounded-pill"
					onChange={handleTransactionType}
					name="transactionType"
					id="transactionType"
				>
					<option value="">Acheter ou Louer</option>
					<option value="Achat">Acheter</option>
					<option value="Louer">Louer</option>
				</select>
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
				<Input
					id="location"
					type="text"
					placeholder="Localisation"
					onBlur={handleLocation}
				/>
				<Input
					id="minPrice"
					type="text"
					placeholder="Prix Min"
					onChange={handleMinPrice}
				/>
				<Input
					id="maxPrice"
					type="text"
					placeholder="Prix Max"
					onChange={handleMaxPrice}
				/>
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
				<Input
					id="roomNumber"
					type="number"
					placeholder="Pièces"
					onChange={handleRoomNumber}
				/>
				<Input
					id="surface"
					type="number"
					placeholder="Surface"
					onChange={handleSurface}
				/>
			</div>
		</div>
	)
}

export default Filters
