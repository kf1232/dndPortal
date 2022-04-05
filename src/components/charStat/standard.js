import './charStat_body.css'

import {useState, useCallback} from 'react'

const STAT_FLOOR = 1 
const STAT_TEXT = ['STR: ', 'DEX: ', 'CON: ', 'INT: ', 'WIS: ', 'CHA: ']

function Standard() {
    const stat_id = [0, 1, 2, 3, 4, 5]
    const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))
    const [options, setOptions] = useState(['15', '14', '13', '12', '10', '8'])

    const alter_stat = useCallback((stat, change) => {
        if (base_stat[stat] !== 1)
            options.push(base_stat[stat])
        options.splice(options.indexOf(change),1)
        const new_stats = [...base_stat]
        new_stats[stat] = change
        set_stat(new_stats)
	}, [base_stat])

    function resetStat() {
        setOptions(['15', '14', '13', '12', '10', '8'])
        set_stat(new Array(6).fill(STAT_FLOOR))
    }

    return (
		<div className='statbuilder'>
			<div className='statbuilder_info'>
                Info
            </div>
			<div className='statbuilder_actions'>
                Actions
                <button className='standardButton' onClick={resetStat}> Reset Stats </button>
			</div>
			<div className='statbuilder_body'>	
                {stat_id.map((stat) =>
                    <div className='statbuilder_stat'>
                        <div className='stat_name'>
                            {STAT_TEXT[stat]}
                        </div>
                        <div className='stat_value'> 
                            {base_stat[stat]}
                        </div>
                        {base_stat[stat] === 1 ? 
                            <div className='stat_select'>
                                <select name='standard' onChange={(event) => alter_stat(stat, event.target.value)}>
                                    <option value=''> - </option>
                                    {options.map((obj) => <option value={obj}>{obj}</option> )}
                                </select>  
                            </div> : null }
                    </div> )} 
			</div>
			
		</div>
    )
}

export default Standard