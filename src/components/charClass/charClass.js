import './charClass.css'

const CLASS_LIST = {
    Barbarian: {
        name: 'Barbarian',
        hit_die: 'd12',
        primary_ability: ['STR'],
        saves: ['STR', 'CON'],
    },
    Bard: {
        name: 'Bard',
        hit_die: 'd8',
        primary_ability: ['CHA'],
        saves: ['DEX','CHA'],
    },
    Cleric: {
        name: 'Cleric',
        hit_die: 'd8',
        primary_ability: ['WIS'],
        saves: ['WIS','CHA'],
    },
    Druid: {
        name: 'Druid',
        hit_die: 'd8',
        primary_ability: ['WIS'],
        saves: ['INT','WIS'],
    },
    Fighter: {
        name: 'Fighter',
        hit_die: 'd10',
        primary_ability: ['STR','CHA'],
        saves: ['STR','CON'],
    },
    Monk: {
        name: 'Monk',
        hit_die: 'd8',
        primary_ability: ['DEX','WIS'],
        saves: ['STR','DEX'],
    },
    Paladin: {
        name: 'Paladin',
        hit_die: 'd10',
        primary_ability: ['STR','CHA'],
        saves: ['WIS','CHA'],
    },
    Ranger: {
        name: 'Ranger',
        hit_die: 'd10',
        primary_ability: ['DEX','WIS'],
        saves: ['STR','DEX'],
    },
    Rogue: {
        name: 'Rogue',
        hit_die: 'd8',
        primary_ability: ['DEX'],
        saves: ['DEX','INT'],
    },
    Sorcerer: {
        name: 'Sorcerer',
        hit_die: 'd6',
        primary_ability: ['CHA'],
        saves: ['CON','CHA'],
    },
    Warlock: {
        name: 'Warlock',
        hit_die: 'd8',
        primary_ability: ['CHA'],
        saves: ['WIS','CHA'],
    },
    Wizard: {
        name: 'Wizard',
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
            <div key={CLASS_LIST[key].name} onClick={function() {console.log(CLASS_LIST[key].name)}} className='class_type'>
                <div className='class_name'> 
                    {CLASS_LIST[key].name} 
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