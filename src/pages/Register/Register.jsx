import RegisterForm from './components/RegisterForm'
import AnimatedPage from '../../templates/AnimatedPage'

const Connect = () => {
	return (
		<AnimatedPage>
			<div className="d-flex col-10 offset-1 col-md-6 offset-md-3 my-5 registerForm">
				<RegisterForm />
			</div>
		</AnimatedPage>
	)
}

export default Connect
