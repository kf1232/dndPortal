import UnitAncestory from './UnitAncestory/UnitAncestory'
import SelectedAncestory from './SelectedAncestory/SelectedAncestory'

import { useState, useEffect } from 'react'
import axios from 'axios'

function CharacterAncestory(){
	const [loading, setLoading] = useState(true)
	const [ancestory, setAncestory] = useState([])
	const [attribue, setAttribue] = useState([])
	const [selected, setSelected] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const ancestoryResponse = await axios.get('http://localhost:3004/Ancestry')
				const attributeResponse = await axios.get('http://localhost:3004/Attributes')
				setAncestory(ancestoryResponse.data)
				setAttribue(attributeResponse.data)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	function handleSelect(selectedValue = '') {
		setSelected(selectedValue)
	}

	return(
		<div>
			<div className='componentQuickActions'> 
				<div> Quick Actions </div>
				<button onClick={() => handleSelect()}> Reset </button>	
				<button> {selected} </button>
			</div>
			{ selected !== '' ?
				<div className='componentSelected'> 
					<SelectedAncestory	anc={ancestory[selected]} atr={attribue}/>
				</div>
			:
				loading ? "Loading..." :
				<div className='componentBody'>
					{ancestory.map(part => {
						return (
							<UnitAncestory	key={part.id}
											anc={part}
											atr={attribue}
											onClick={handleSelect}/>
						)
					})}
				</div>
			} 
		</div>
	)
}

export default CharacterAncestory