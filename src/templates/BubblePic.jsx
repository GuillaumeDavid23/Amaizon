import * as Bootstrap from 'react-bootstrap'

import '../styles/BubblePic.css'

export const BubblePic = (props) => {
	const { text, color, size } = props

	const style = {
		backgroundColor: color ? color : 'blue',
		height: size ? size : '100px',
		width: size ? size : '100px',
	}

	return (
		<Bootstrap.Container>
			<div className={`bbp_main`} style={style}>
				<p className={`bbp_text`}>{text ? text : null}</p>
			</div>
		</Bootstrap.Container>
	)
}
