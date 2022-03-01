// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { heart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
// import { heart as fullHeart } from '@fortawesome/free-solid-svg-icons'

const HomeCards = ({ propertyDatas }) => {
	const { _id, imageUrl, title, description } = propertyDatas

	// const handleFav = () => {
	// 	console.log(this.innerHTML)
	// }

	console.log(propertyDatas.imageUrl)

	return (
		<div class="card">
			<img
				src={'http://localhost:5000/' + imageUrl.photo1}
				class="card-img-top"
				alt="..."
			/>
			<div class="card-body">
				<div class="d-flex justify-content-between">
					<h5 class="card-title">{title}</h5>
					{/* <div onClick={handleFav}>
						<FontAwesomeIcon icon={['far', 'heart']} size="xl" />
					</div> */}
				</div>
				<p class="card-text">{description}</p>
				<a href={`/single/${_id}`} class="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	)
}

export default HomeCards
