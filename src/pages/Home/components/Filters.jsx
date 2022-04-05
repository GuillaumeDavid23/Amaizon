import Input from '../../../templates/Input'
import { useState } from 'react'
import {
	Col,
	Container,
	Row,
	FormControl,
	Button,
	Collapse,
} from 'react-bootstrap'
import { BsChevronDown, BsChevronUp, BsSearch } from 'react-icons/bs'

const Filters = ({ setProperties }) => {
	var lastSearch = JSON.parse(localStorage.getItem('LAST_SEARCH_FILTERS'))
	if(!lastSearch){
		lastSearch = {}
	}
	const [transactionType, setTransactionType] = useState(
		lastSearch.transactionType ? lastSearch.transactionType : ''
	)
	const [propertyType, setPropertyType] = useState(
		lastSearch.propertyType ? lastSearch.propertyType : ''
	)
	const [location, setLocation] = useState(
		lastSearch.location ? lastSearch.location : ''
	)
	const [minPrice, setMinPrice] = useState(
		lastSearch.minPrice ? lastSearch.minPrice : ''
	)
	const [maxPrice, setMaxPrice] = useState(
		lastSearch.maxPrice ? lastSearch.maxPrice : ''
	)
	const [roomNumberMin, setRoomNumberMin] = useState(
		lastSearch.roomNumberMin ? lastSearch.roomNumberMin : ''
	)
	const [roomNumberMax, setRoomNumberMax] = useState(
		lastSearch.roomNumberMax ? lastSearch.roomNumberMax : ''
	)
	const [surfaceMin, setSurfaceMin] = useState(
		lastSearch.surfaceMin ? lastSearch.surfaceMin : ''
	)
	const [surfaceMax, setSurfaceMax] = useState(
		lastSearch.surfaceMax ? lastSearch.surfaceMax : ''
	)
	const [search, setSearch] = useState(
		lastSearch.search ? lastSearch.search : ''
	)

	const [open, setOpen] = useState(false)

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

	const handleRoomNumberMin = (e) => {
		setRoomNumberMin(e.target.value)
	}
	const handleRoomNumberMax = (e) => {
		setRoomNumberMax(e.target.value)
	}

	const handleSurfaceMin = (e) => {
		setSurfaceMin(e.target.value)
	}
	const handleSurfaceMax = (e) => {
		setSurfaceMax(e.target.value)
	}

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	function handleSearchClick() {
		let filters = {
			transactionType,
			propertyType,
			location,
			minPrice,
			maxPrice,
			roomNumberMin,
			roomNumberMax,
			surfaceMin,
			surfaceMax,
			search,
		}
		localStorage.setItem('LAST_SEARCH_FILTERS', JSON.stringify(filters))
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
	}

	return (
		<Container className="d-flex justify-content-center mt-4 mb-4">
			<Row
				id="filters"
				className="d-flex justify-content-around p-4 w-100"
			>
				<Row className="justify-content-center align-items-center flex-column flex-lg-row w-100">
					<Col
						xs="12"
						lg="8"
						className="d-flex flex-column flex-lg-row justify-content-center"
					>
						<FormControl
							type="search"
							placeholder="Effectuez votre recherche..."
							className="me-2 header-search-input"
							aria-label="Search"
							onChange={handleSearch}
							value={search}
						/>
						<Button
							className="custom-btn mt-3 mb-3 mt-lg-0 mb-lg-0"
							onClick={() => handleSearchClick()}
							aria-controls="filtersAdvanced"
							aria-expanded={open}
						>
							Rechercher <BsSearch className="ms-2" />
						</Button>
					</Col>
					<Col
						xs="12"
						lg="12"
						className="d-flex justify-content-center mt-3"
					>
						<button
							href="#"
							className="custom-btn-advanced"
							onClick={() => setOpen(!open)}
							aria-controls="filtersAdvanced"
							aria-expanded={open}
						>
							Recherche avancé
							{open ? (
								<BsChevronDown className="ms-1" />
							) : (
								<BsChevronUp className="ms-1" />
							)}
						</button>
					</Col>
				</Row>
				<Collapse in={open} className="mt-3">
					<Row
						id="filtersAdvanced"
						className="justify-content-center"
					>
						<Col xs="10" lg="2">
							<div>
								<label className="fw-bold text-center w-100">
									Type de vente
								</label>
							</div>
							<select
								className="form-select rounded-pill"
								onChange={handleTransactionType}
								name="transactionType"
								id="transactionType"
							>
								<option value="">Acheter ou Louer</option>
								<option
									value="Achat"
									selected={
										transactionType === 'Achat'
											? true
											: false
									}
								>
									Acheter
								</option>
								<option
									value="Location"
									selected={
										transactionType === 'Location'
											? true
											: false
									}
								>
									Louer
								</option>
							</select>
						</Col>
						<Col xs="10" lg="2">
							<div>
								<label className="fw-bold text-center w-100">
									Type de bien
								</label>
							</div>
							<select
								className="form-select rounded-pill"
								onChange={handlePropertyType}
								name="propertyType"
								id="propertyType"
							>
								<option value="">Choisissez une valeur</option>
								<option
									value="Maison"
									selected={
										propertyType === 'Maison' ? true : false
									}
								>
									Maison
								</option>
								<option
									value="Appartement"
									selected={
										propertyType === 'Appartement'
											? true
											: false
									}
								>
									Appartement
								</option>
							</select>
						</Col>
						<Col xs="5" lg="2">
							<div>
								<label className="fw-bold text-center w-100">
									Localisation
								</label>
							</div>
							<Input
								id="location"
								type="text"
								placeholder="Amiens, Paris.."
								onBlur={handleLocation}
								value={location ? location : ''}
							/>
						</Col>
						<Col xs="7" lg="2">
							<div>
								<label className="fw-bold text-center w-100">
									Prix
								</label>
							</div>
							<div className="d-flex align-items-center">
								<Input
									id="minPrice"
									type="text"
									placeholder="Min"
									onChange={handleMinPrice}
									value={minPrice ? minPrice : ''}
								/>
								<strong className="ms-2 me-2">-</strong>
								<Input
									id="maxPrice"
									type="text"
									placeholder="Max"
									onChange={handleMaxPrice}
									value={maxPrice ? maxPrice : ''}
								/>
							</div>
						</Col>
						<Col xs="6" lg="2">
							<div>
								<label className="fw-bold text-center w-100">
									Pièce
								</label>
							</div>
							<div className="d-flex align-items-center">
								<Input
									id="roomNumberMin"
									type="number"
									placeholder="Min"
									onChange={handleRoomNumberMin}
									value={roomNumberMin ? roomNumberMin : ''}
								/>
								<strong className="ms-2 me-2">-</strong>
								<Input
									id="roomNumberMax"
									type="number"
									placeholder="Max"
									value={roomNumberMax ? roomNumberMax : ''}
									onChange={handleRoomNumberMax}
								/>
							</div>
						</Col>
						<Col xs="6" lg="2" className="d-flex flex-column">
							<div>
								<label className="fw-bold text-center w-100">
									Surface
								</label>
							</div>
							<div className="d-flex align-items-center">
								<Input
									id="surfaceMin"
									type="number"
									placeholder="Min"
									onChange={handleSurfaceMin}
									value={surfaceMin ? surfaceMin : ''}
								/>
								<strong className="ms-2 me-2">-</strong>
								<Input
									id="surfaceMax"
									type="number"
									placeholder="Max"
									onChange={handleSurfaceMax}
									value={surfaceMax ? surfaceMax : ''}
								/>
							</div>
						</Col>
					</Row>
				</Collapse>
			</Row>
		</Container>
	)
}

export default Filters
