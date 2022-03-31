import {useState, useCallback} from 'react'

const STAT_FLOOR = 1 
const STAT_TEXT = ['STR: ', 'DEX: ', 'CON: ', 'INT: ', 'WIS: ', 'CHA: ']

function Standard() {
    const stat_id = [0, 1, 2, 3, 4, 5]
    const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))
    const [options, setOptions] = useState(['15', '14', '13', '12', '10', '8'])

    const alter_stat = useCallback((stat, change) => {
        if (base_stat[stat] != 1)
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
        <div className='standard'>
            <div>
                <button className='standardButton' onClick={resetStat}> Reset Stats </button>
            </div>
            
            {stat_id.map((stat) =>
                <div className='standardContainer'>
                    <div className='standardData'>
                        <div className='standardValue'> 
                            {base_stat[stat]}
                        </div>
                        <div className='standardTitle'>
                           {STAT_TEXT[stat]}
                        </div>
                    </div>
                    <div className='standardSelect'>
                        {base_stat[stat] == 1 ? 
                            <select name='standard' onChange={(event) => alter_stat(stat, event.target.value)}>
                                <option value=''> - </option>
                                {options.map((obj) => <option value={obj}>{obj}</option> )}
                        </select> : null }
                    </div>
                    
                    
                </div>
            )}        
        </div>
    )
}

export default Standard