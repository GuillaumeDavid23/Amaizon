import ConnectForm from './components/ConnectForm'
import AnimatedPage from '../../templates/AnimatedPage'

const Connect = () => {
	return (
		<AnimatedPage>
			<div className="d-flex col-10 offset-1 col-md-6 offset-md-3 my-5 connectForm">
				<ConnectForm />
			</div>
		</AnimatedPage>

	)
}

export default Connect
