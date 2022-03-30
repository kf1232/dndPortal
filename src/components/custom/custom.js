import {useState, useCallback} from 'react'
import './custom.css'
    // 08 09 10 11 12 13 14 15 16 17 18 19 20   stat
	// -1 -1  0  0  1  1  2  2  3  3  4  4  5   bonus
	//  0  1  2  3  4  5  7  9  -  -  -  -  -   COST

const STAT_FLOOR = 1
const STAT_CELING = 20
const STAT_TEXT = ['STR : ', 'DEX : ', 'CON : ', 'INT : ', 'WIS : ', 'CHA : ']

function Custom() {
    const stat_id = [0, 1, 2, 3, 4, 5]
    const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))

    const alter_stat = useCallback((stat, change) => {
        const new_stats = [...base_stat]
        new_stats[stat] = Math.min(Math.max(new_stats[stat] + change, STAT_FLOOR), STAT_CELING)
        set_stat(new_stats)
    }, [base_stat])

    const batch_stat = useCallback((change) => {
        const new_stats = new Array(6).fill(change)
        set_stat(new_stats)
    }, [base_stat])

    return (
        <div>
            <div className='custom'>
                <div className='alignstats'>
                    <button onClick = {function() {batch_stat(STAT_CELING)}}> Max Stats </button>
                    <button onClick = {function() {batch_stat(STAT_FLOOR)}}> Min Stats </button>
                </div>
                {stat_id.map((stat) =>
                    <div className='statblock'>
                        <button className='statblock' onClick={function() {alter_stat(stat, -1)}}>dec</button>
                        <div className='stattext'>{STAT_TEXT[stat]}</div>
                        <div className='statvalue'>{base_stat[stat]}</div>
                        <button className='statblock' onClick={function() {alter_stat(stat, 1)}}>inc</button>
                    </div>
                )} 
            </div>
        </div>
    )
}

export default Custom