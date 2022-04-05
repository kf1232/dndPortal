import './charRace.css'
// ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
const RACE_LIST = {
    Dragonborn: {
        name: 'Dragonborn',
        traits: [2,0,0,0,0,1],
    },
    Dwarf: {
        name: 'Dwarf',
        traits: [0,0,2,0,0,0],
    },
    Elf: {
        name: 'Elf',
        traits: [0,2,0,0,0,0],
    },
    Gnome:{
        name: '',
        traits: [0,0,0,2,0,0],
    },
    HalfElf: {
        name: 'Half-Elf',
        traits: [0,0,0,0,0,2],
        //Somehow mark two extra 1 point bonus possibly as other field?
    },
    HalfOrk: {
        name: 'Half-Orc',
        traits: [2,0,1,0,0,0],
    }

}

function CharRace(){
    return(
        <div className='block_race'>
            Char Race Base
            <div className='race_select'>

            </div>
        </div>
    )
}

export default CharRace