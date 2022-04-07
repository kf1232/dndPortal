import PropTypes from 'prop-types';

function SelectOption(props) {
	function handleSelect(event) {
		event.target.className === 'optionInfo' ?
			props.onClick(event.target.previousSibling.innerText)
			:
			props.onClick(event.target.innerText)
	}

	return (
		Object.keys(props.value).map((key, i) => {
			return (
				<div key={i} className='gridOption'>
					<div className='optionTitle' onClick={handleSelect}>
						{props.value[key].title}
					</div>
					<div className='optionInfo' onClick={handleSelect}>
						{props.value[key].feature}
					</div>
				</div>
			)
		})
	)
}

SelectOption.propTypes = {
    value: PropTypes.object
}


export default SelectOption;