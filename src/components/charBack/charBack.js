import './charBack.css'

import {useState} from 'react'

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
				<div className='gridLayout'> <SelectOption value={BACKGROUND} onClick={handleSelect}/> </div>
				
			}
		</div>
	)
}

export default CBack