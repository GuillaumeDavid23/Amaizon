import BtnGeneral from '../../../templates/BtnGeneral'

const Description = (props) => {
    const {data} = props
	return (
		<div className="description">
			<h2>
				{data.title} de {data.surface} m²
			</h2>

			<small>Ref : {data.propertyRef}</small>
			<h4>Description :</h4>
			<p>{data.description}</p>
			<div className="d-flex justify-content-between align-items-center">
				<h3>Prix : {data.amount} €</h3>
				<BtnGeneral text="Prendre RDV" className="btnRdv" />
			</div>
		</div>
	)
}

export default Description
