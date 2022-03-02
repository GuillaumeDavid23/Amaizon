import BtnGeneral from "../../../templates/BtnGeneral"
const Banner = (props) => {
	return (
		<div className="homeBanner d-none d-lg-flex flex-column">
			<p>
				Bienvenue chez Amaizon.fr <br />
				En recherche d'un nouveau logement ?
				<br />
				Parcourez notre large éventail d'offres en location où à l'achat
				dans la région que vous souhaitez et prenez rendez-vous ! <br />
				<br />
				Vous souhaitez vendre un de vos biens ? 
                <br />
                N'hésitez pas à nous
				contacter pour être mis en relation avec l'un de nos agents.
				<br />
			</p>
			<BtnGeneral className="BtnBanner " text="Contactez-nous" />
		</div>
	)
}

export default Banner
