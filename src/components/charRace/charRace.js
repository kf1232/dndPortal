import './charRace.css'

const STAT_NAMES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
const RACE_LIST = {
    Dragonborn: {
        traits: [2,0,0,0,0,1],
    },
    Dwarf: {
        traits: [0,0,2,0,0,0],
    },
    Elf: {
        traits: [0,2,0,0,0,0],
    },
    Gnome:{
        traits: [0,0,0,2,0,0],
    },
    HalfElf: {
        traits: [0,0,0,0,0,2],
        //Somehow mark two extra 1 point bonus possibly as other field?
    },
    HalfOrk: {
        traits: [2,0,1,0,0,0],
    },
    Tiefling: {
        traits: [0,0,0,1,0,2], 
    }

}

function CharRace(){
    return(
        <div className='block_race'>
            Char Race Base
            <div className='race_select'>
                {Object.keys(RACE_LIST).map(function(key) {
                    return(
                        <div key={RACE_LIST[key].name} onClick={function() {console.log(RACE_LIST[key].name)}}>
                            <div> 
                                {key} 
                            </div>
                            <div>
                                {STAT_NAMES.map((stat) => 
                                    stat ? <div> {stat} </div> : null
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharRace