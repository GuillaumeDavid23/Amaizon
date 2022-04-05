import ForgetPassBefore from './components/ForgetPassBefore'
import ForgetPassAfter from './components/ForgetPassAfter'

const ForgetPass = ({ step }) => {
	if (step === 'before') {
		return <ForgetPassBefore />
	} else {
		return <ForgetPassAfter />
	}
}

export default ForgetPass
