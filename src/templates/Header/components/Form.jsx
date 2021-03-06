import { Form, FormControl, Button } from 'react-bootstrap'
//This components is for create search forms
const Search = () => {
	return (
		<Form className="d-flex header-form align-items-center me-4">
			<FormControl
				type="search"
				placeholder="Effectuez votre recherche..."
				className="me-2 header-search-input"
				aria-label="Search"
			/>
			<Button className="header-btn header-btn-go" variant="primary">
				GO
			</Button>
		</Form>
	)
}

export default Search
