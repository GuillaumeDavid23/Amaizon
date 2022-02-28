import PropTypes from 'prop-types'

const Img = ({ idValue, classList, srcValue, altValue }) => {
	return (
		<img id={idValue} className={classList} src={srcValue} alt={altValue} />
	)
}

Img.propTypes = {
	idValue: PropTypes.string,
	classList: PropTypes.string,
	srcValue: PropTypes.string.isRequired,
	altValue: PropTypes.string.isRequired,
}

export default Img
