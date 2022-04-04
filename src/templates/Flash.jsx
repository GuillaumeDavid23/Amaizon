import FlashMessage from 'react-flash-message'

const Flash = ({ message, className, show }) => {
	if (show) {
		return (
			<div className="flash">
				<FlashMessage duration={5000}>
					<strong
						className={
							'alert ' + (className ? className : 'alert-info')
						}
					>
						{message}
					</strong>
				</FlashMessage>
			</div>
		)
	}else{
		return false
	}
}

export default Flash
