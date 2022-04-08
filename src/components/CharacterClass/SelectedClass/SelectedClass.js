import PropTypes from 'prop-types';

function SelectedClass(props) {
	return (
		<div className='selectComponent'>
			<div className='selectTitle'>
				{props.cla.title}
			</div>
			<div className='selectMinorTitle'>
				Hit Die {props.cla.hitDie}
			</div>
			<div className='selectMinorTitle'>
				Primary Attribute
			</div>
			<div className='selectGrid'>
				{props.cla.primaryAbility.map((trait, i) => {
					return( 
						<div className='selectGridMember' key={i}> 
							{trait}
						</div> 
					)
				})} 
			</div>
			<div className='selectMinorTitle'>
				Saves
			</div>
			<div className='selectGrid'>
				{props.cla.saves.map((trait, i) => {
					return( 
						<div className='selectGridMember' key={i}> 
							{trait}
						</div> 
					)
				})} 
			</div>
		</div>
	)
}

SelectedClass.propTypes = {
	props: PropTypes.any,
	cla: PropTypes.object
}

export default SelectedClass