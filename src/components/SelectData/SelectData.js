import PropTypes from 'prop-types'

function SelectData(props) {
	try {
		return (
			Object.keys(props.data).map((part,i) => {
				if( part == 'id' ) return null
					
				if(typeof props.data[part] === 'object')
					return (<SelectData data={props.data[part]}/>)
	
				return(
					<div className={part} key={i}>
						{part+": "+props.data[part]}
					</div>
				)
			})
		)
	} catch (e) {
		console.log(e)
	}
}

SelectData.propTypes = {
	props: PropTypes.any,
	data: PropTypes.object,
}
export default SelectData

/*

*/