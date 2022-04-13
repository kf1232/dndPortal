import PropTypes from 'prop-types'

function GridData(props) {
	function handleSelect(value) {
		props.onClick(value)
	}

	return Object.values(props.data).map((part) => {
		try{
			return (
				<div onClick={() => handleSelect(part.id)} key={part.id}>
					<div className='title'>
						{part.title}
					</div>
					<div className='description'>
						{part.description}
					</div>
				</div>
			)
		} catch(e) {
			console.log(e)
		}
	})
}

GridData.propTypes = {
	props: PropTypes.any,
	data: PropTypes.object,
}
export default GridData

/*

*/