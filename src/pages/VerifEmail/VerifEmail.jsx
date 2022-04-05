import { useParams } from 'react-router-dom'
import BeforeVerif from './components/BeforeVerif'
import AfterVerif from './components/AfterVerif'

const VerifEmail = () => {
	const { token } = useParams()

	return (
		<div className="d-flex justify-content-center">
			{token === 'before' ? <BeforeVerif /> : <AfterVerif />}
		</div>
	)
}

export default VerifEmail
