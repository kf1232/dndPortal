import PropTypes from 'prop-types';

function Selected(props) {
	return (
		<div className='selectLayout'>
			{Object.keys(props.value).map((key, i) => {
				var type = key === 'title' ? 'optionTitle': 'optionInfo'
				return (
					<div className={type} key={i}> {props.value[key]} </div>
				)
			})}
		</div>
	)
}

Selected.propTypes = {
    value: PropTypes.object
}


export default Selected;