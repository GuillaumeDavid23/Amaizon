import { Carousel } from 'react-bootstrap'

const Photos = (props) => {
	if (props.data === null) {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={require('../../../assets/announceDefault.png')}
						alt="First slide"
					/>
				</Carousel.Item>
			</Carousel>
		)
	} else {
		return (
			<Carousel>
				{Object.keys(props.data).map((keyImage) => {
					return (
						<Carousel.Item key={keyImage}>
							<img
								className="d-block w-100"
								src={
									window.env.API_DOMAIN + props.data[keyImage]
								}
								alt="First slide"
							/>
						</Carousel.Item>
					)
				})}
			</Carousel>
		)
	}
}

export default Photos
