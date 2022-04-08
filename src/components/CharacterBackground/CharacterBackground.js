import './CharacterBackground.css'

import {useState} from 'react';
import Selected from '../Selected/selected';
import SelectOption from '../SelectOption/selectOption';

// TODO: move to json web server
const BACKGROUND = {
	Acolyte: {
		title: 'Acolyte',
		feature: 'Shelter of the Faithful',
		description: 'test test test'
	},
	Criminal: {
		title: 'Criminal',
		feature: ['Criminal Contract'],
	},
	Spy: {
		title: 'Spy',
		feature: ['Criminal Contract'],
	},
	Folk_Hero: {
		title: 'Folk Hero',
		feature: ['Rustic Hospitality'],
	},
	Noble: {
		title: 'Noble',
		feature: ['Position of Privilege'],
	},
	Sage: {
		title: 'Sage',
		feature: ['Researcher'],
	},
	Soldier: {
		title: 'Soldier',
		feature: ['Military Rank'],
	},
}

function CBack(){
	const [selected, setSelected] = useState('')

	function handleSelect(selectedValue) {
		setSelected(selectedValue)
	}

	return(
		<div>
			<div className='title'> Title </div>
			<div className='info'> Info </div>
			<div className='quickActions'> 
				<div> Quick Actions: </div>
				<button onClick={() => {handleSelect('')}}>Reset</button> 
			</div>
			{selected ? 
				<Selected value={BACKGROUND[selected]}/>
				: 
				<div className='gridLayout'> 
					<SelectOption value={BACKGROUND} onClick={handleSelect}/> 
				</div>
			}
		</div>
	)
}

export default CBack;