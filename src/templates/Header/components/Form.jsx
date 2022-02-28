import { Form, FormControl, Button } from 'react-bootstrap'
const Search = () => {
	
	return (
		<Form className="d-flex header-form">
			<FormControl
				type="search"
				placeholder="Effectuez votre recherche..."
				className="me-2 header-search-input"
				aria-label="Search"
			/>
			<Button className="header-btn" variant="primary">
				GO
			</Button>
		</Form>
	)
}

export default Search
