import { useState, useEffect } from 'react'
import axios from 'axios'

import UnitClass from './UnitClass/UnitClass'
import SelectedClass from './SelectedClass/SelectedClass'

function CharacterAncestory(){
	const [loading, setLoading] = useState(true)
	const [dndClass, setClass] = useState([])
	const [attribue, setAttribue] = useState([])
	const [selected, setSelected] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const classResponse = await axios.get('http://localhost:3004/Class')
				const attributeResponse = await axios.get('http://localhost:3004/Attributes')
				setClass(classResponse.data)
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
                    <SelectedClass  cla={dndClass[selected]} 
                                    atr={attribue}/>
				</div>
			:
				loading ? "Loading..." :
				<div className='componentBody'>
					{dndClass.map(part => {
                        return( <UnitClass key={part.id} part={part} onClick={handleSelect}/> )
					})}
				</div>
			} 
		</div>
	)
}

export default CharacterAncestory

/*
import {useState} from 'react'

const CLASS_LIST = {
    Barbarian: {
        hit_die: 'd12',
        primary_ability: ['STR'],
        saves: ['STR', 'CON'],
    },
    Bard: {
        hit_die: 'd8',
        primary_ability: ['CHA'],
        saves: ['DEX','CHA'],
    },
    Cleric: {
        hit_die: 'd8',
        primary_ability: ['WIS'],
        saves: ['WIS','CHA'],
    },
    Druid: {
        hit_die: 'd8',
        primary_ability: ['WIS'],
        saves: ['INT','WIS'],
    },
    Fighter: {
        hit_die: 'd10',
        primary_ability: ['STR','CHA'],
        saves: ['STR','CON'],
    },
    Monk: {
        hit_die: 'd8',
        primary_ability: ['DEX','WIS'],
        saves: ['STR','DEX'],
    },
    Paladin: {
        hit_die: 'd10',
        primary_ability: ['STR','CHA'],
        saves: ['WIS','CHA'],
    },
    Ranger: {
        hit_die: 'd10',
        primary_ability: ['DEX','WIS'],
        saves: ['STR','DEX'],
    },
    Rogue: {
        hit_die: 'd8',
        primary_ability: ['DEX'],
        saves: ['DEX','INT'],
    },
    Sorcerer: {
        hit_die: 'd6',
        primary_ability: ['CHA'],
        saves: ['CON','CHA'],
    },
    Warlock: {
        hit_die: 'd8',
        primary_ability: ['CHA'],
        saves: ['WIS','CHA'],
    },
    Wizard: {
        hit_die: 'd6',
        primary_ability: ['INT'],
        saves: ['INT','WIS'],
    }
}

function CharacterClass(){
    const [classSelect, setClass] = useState('')

    return(
    <div className='class_block'>
        <div>
            <button onClick={function(){setClass('')}}> Reset Class </button>
        </div>
        {classSelect ? 
            <div> Selected: {classSelect} </div> 
            :
            <div className='class_grid'>
                {Object.keys(CLASS_LIST).map(function(key, i) {
                return (
                <div key={i} onClick={function() {setClass(key)}} className='class_type'>
                    <div className='class_name'> 
                        {key} 
                    </div>
                    <div className='class_hit'> 
                        {'Hit Dice: '+CLASS_LIST[key].hit_die} 
                    </div>
                    <div className='class_ability'> 
                        Primary Stat <br/>
                        {CLASS_LIST[key].primary_ability.map((abil_type) => 
                            abil_type+' '
                        )} 
                    </div>
                    <div className='class_saves'>
                        Saves <br/>
                        {CLASS_LIST[key].saves.map((save_type) => 
                            save_type+' '
                        )} 
                    </div>
                </div>
                )})}
            </div>
        }
    </div>
    )
}

export default CharacterClass

*/