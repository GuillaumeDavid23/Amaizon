import { useParams } from 'react-router-dom'
import BeforeVerif from './components/BeforeVerif'
import AfterVerif from './components/AfterVerif'

const VerifEmail = () => {
	const { token } = useParams()

	if (token === 'before') {
		return <BeforeVerif />
	} else {
		return <AfterVerif />
	}
}

export default VerifEmail
