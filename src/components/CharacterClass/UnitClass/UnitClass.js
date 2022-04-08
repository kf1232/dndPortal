import PropTypes from 'prop-types'

function UnitClass(props) {
	function handleSelect() {
		props.onClick(props.part.id)
	}

	return (
		<div className="selectComponent" onClick={handleSelect}>
			<div>
				<div className='selectTitle'>
					{props.part.title}
				</div>
				<div className='selectGrid'>
					{props.part.primaryAbility.map(abil => {
						return (
							<div className='selectGridMember' key={props.part.id+abil}>
								{abil}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

UnitClass.propTypes = {
	props: PropTypes.any,
	part: PropTypes.any,
	onClick: PropTypes.any
}

export default UnitClass