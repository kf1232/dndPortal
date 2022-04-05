import './charStat_body.css'

import {useState, useCallback} from 'react'

function Custom() {
    const FLOOR = 1, CELING = 20
    const STAT_TEXT = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
    const QUICK_ACTIONS = ['Min Stats','Base Stats','Max Stats']
    const QUICK_BUTTONS = [0,1,2]
    const QUICK_VALUE = [1, 8, 20]
    const stat_id = [0, 1, 2, 3, 4, 5]

    const [base_stat, set_stat] = useState(new Array(6).fill(FLOOR))

    const alter_stat = useCallback((stat, change) => {
        const new_stats = [...base_stat]
        new_stats[stat] = Math.min(Math.max(new_stats[stat] + change, FLOOR), CELING)
        set_stat(new_stats)
    }, [base_stat])

    const batch_stat = useCallback((change) => {
        const new_stats = new Array(6).fill(change)
        set_stat(new_stats)
    }, [base_stat])

    return (
		<div className='statbuilder'>
			<div className='statbuilder_info'>
                Custom Point Buy
            </div>
			<div className='statbuilder_actions'>
                {QUICK_BUTTONS.map((i) => 
                    <button className='statbuilder_button' onClick = {function() {batch_stat(QUICK_VALUE[i])}}>
                            {QUICK_ACTIONS[i]}
                    </button>
                )}
			</div>
			<div className='statbuilder_body'>	
                {stat_id.map((stat) => 
                    <div className='statbuilder_stat'>
                    <div className='stat_name'>
                        {STAT_TEXT[stat] + ' ' + base_stat[stat]} 
                    </div>
                    <button className='stat_dec'
                            onClick={function() {alter_stat(stat,-1)}}>
                            -
                    </button>
                    <button className='stat_inc'
                            onClick={function() {alter_stat(stat, 1)}}>
                            +
                    </button>
                </div>
                )}
			</div>
			
		</div>
    )
}

export default Custom