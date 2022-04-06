import './charRace.css'

import {useState} from 'react'

const STAT_ID = [0,1,2,3,4,5]
const STAT_NAMES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
const RACE_LIST = {
    Dragonborn: {
        traits: [2,0,0,0,0,1],
        feature: ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance'],
    },
    Dwarf: {
        traits: [0,0,2,0,0,0],
        feature: ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Stonecunning'],
    },
    Elf: {
        traits: [0,2,0,0,0,0],
        feature: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'],
    },
    Gnome:{
        traits: [0,0,0,2,0,0],
        feature: ['Darkvision', 'Gnome Cunning'],
    },
    Half_Elf: {
        traits: [0,0,0,0,0,2],
        feature: ['Half Elf Extra Ability Score Bonus', 'Darkvision', 'Fey Ancestry', 'Skill Versatility'],
    },
    Halfling:{
        traits: [0,2,0,0,0,0],
        feature: ['Lucky', 'Brave', 'Halfling Nimbleness'],
    },
    Half_Ork: {
        traits: [2,0,1,0,0,0],
        feature: ['Darkvision', 'Menacing', 'Relentless Endurance', 'Savage Attacks'],
    },
    Human:{
        traits: [1,1,1,1,1,1],
        feature: ['Extra Language'],
    },
    Tiefling: {
        traits: [0,0,0,1,0,2],
        feature: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy'],
    }
}

function CharRace(){
    const [raceSelect, setRace] = useState('')

    return(
        <div className='dnd_race_container'>
            <div className='dnd_race_info'>
                Char Race Base
            </div>
            <div className='dnd_race_actions'>
                <button onClick={function() {setRace('')}}>reset choice</button>
            </div>
            {raceSelect ? <div> Selected: {raceSelect} </div> 
            :<div className='dnd_race_grid'>
                {Object.keys(RACE_LIST).map(function(key, i) {
                    return(
                        <div className='dnd_race_element' 
                             key={i} 
                             onClick={function() {setRace(key)}}>
                            <div className='dnd_race_title'> 
                                {key.replace('_', ' ')} 
                            </div>
                            <div className='dnd_race_content'>
                                {STAT_ID.map((stat, i) => 
                                    RACE_LIST[key].traits[stat] ? <div key={i} className='dnd_race_stat_bonus'> {"+ "+RACE_LIST[key].traits[stat]+"  "+STAT_NAMES[stat]} </div> 
                                                                : <div key={i} className='dnd_race_stat_bonus'> {"-"} </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>}
           
        </div>
    )
}

export default CharRace