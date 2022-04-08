import PropTypes from 'prop-types'

function UnitAncestory(props) {
	function handleSelect() {
		props.onClick(props.anc.id)
	}
	
	return (
		<div className="selectComponent" onClick={handleSelect}>
			<div>
				<div className='selectTitle'> {props.anc.title} </div>
				<div className='selectGrid'> 
					{props.anc.traits.map((trait, i) => {
						return( 
							<div className='selectGridMember' key={i}> 
								{trait ? props.atr[i].short+" +"+trait : "-"}
							</div> 
						)
					})} 
				</div>
			</div>
		</div>
	)
}

UnitAncestory.propTypes = {
	props: PropTypes.any,
	anc: PropTypes.any,
	atr: PropTypes.any,
	onClick: PropTypes.any
}

export default UnitAncestory