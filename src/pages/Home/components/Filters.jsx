import Input from '../../../templates/Input'

const Filters = () => {
	const handleSearch = (e) => {
		console.log(e.target.value)
	}

	return (
		<div className="d-flex justify-content-center p-4">
			<div
				id="filters"
				className="d-flex justify-content-around w-75 p-4 rounded-pill"
			>
				<Input
					id=""
					type="text"
					placeholder="Acheter"
					onBlur={handleSearch}
				/>
				<Input
					id=""
					type="text"
					placeholder="Type de bien"
					onBlur={handleSearch}
				/>
				<Input
					id=""
					type="text"
					placeholder="Localisation"
					onBlur={handleSearch}
				/>
				<Input
					id=""
					type="text"
					placeholder="Prix Min/Max"
					onBlur={handleSearch}
				/>
				<Input
					id=""
					type="text"
					placeholder="Pièces"
					onBlur={handleSearch}
				/>
				<Input
					id=""
					type="text"
					placeholder="Surface"
					onBlur={handleSearch}
				/>
			</div>
		</div>
	)
}

export default Filters
