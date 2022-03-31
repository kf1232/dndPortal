import './_statBlock.css'

import {useState, useCallback} from 'react'
/*  DnD 5e Custom
      Player is able to set any value between 1 and 20 as a valid
      character stat value.

*/



function Custom() {
    const FLOOR = 1, CELING = 20, BASE = 8
    const STAT_TEXT = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
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
        <div className='block_main'>
            <div className='block_actions'>
                <button className='block_button' onClick = {function() {batch_stat(CELING)}}> Max Stats </button>
                <button className='block_button' onClick = {function() {batch_stat(BASE)}}> Base Stats </button>
                <button className='block_button' onClick = {function() {batch_stat(FLOOR)}}> Min Stats </button>
            </div>
            <div className='block_stats'>
                {stat_id.map((stat) =>
                    <div className='block_gen'>
                        <div className='block_text'>
                            {STAT_TEXT[stat]+"  "+base_stat[stat]}
                            {}
                        </div>
                        <div className='block_adjust'>
                            <button onClick={function() {alter_stat(stat, -1)}}>dec</button>
                            <button onClick={function() {alter_stat(stat, 1)}}>inc</button>
                        </div>
                        
                    </div>
                )} 
            </div>
            <div className='block_info'>
                Block Info
            </div>
        </div>
    )
}

export default Custom

/*

<div>
            <div className='custom'>
                <div className='alignstats'>
                    
                </div>
                
            </div>
        </div>

*/