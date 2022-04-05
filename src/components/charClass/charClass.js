import './charClass.css'

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

function CharClass(){
    return(
    <div className='class_block'>
        <div className='class_grid'>
            {Object.keys(CLASS_LIST).map(function(key) {
            return (
            <div key={key} onClick={function() {console.log(key)}} className='class_type'>
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
    </div>
    )
}

export default CharClass