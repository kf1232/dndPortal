import PropTypes from 'prop-types';

function SelectedAncestory(props) {
	return (
		<div className='selectComponent'>
			<div className='selectTitle'>
				{props.anc.title}
			</div>
			<div className='selectMinorTitle'>
				Attribue Bonus
			</div>
			<div className='selectGrid'>
				{props.anc.traits.map((trait, i) => {
					return( 
						<div className='selectGridMember' key={i}> 
							{trait ? trait : "-"}
						</div> 
					)
				})} 
			</div>
			<div className='selectMinorTitle'>
				Abilities
			</div>
			<div className='selectGrid'> 
				{props.anc.feature_list.map((trait, i) => {
					return( 
						<div className='selectGridMember' key={i}> 
							{trait ? trait : "-"}
						</div> 
					)
				})} 
			</div>
		</div>
	)
}

SelectedAncestory.propTypes = {
	props: PropTypes.any,
	anc: PropTypes.object
}

export default SelectedAncestory