import './standard.css'

import {useState, useCallback} from 'react'
import Select from 'react-select'

const options = [
    {value: 15, label:'15'},
    {value: 14, label:'14'},
    {value: 13, label:'13'},
    {value: 12, label:'12'},
    {value: 10, label:'10'},
    {value:  8, label: '8'},
]

const STAT_FLOOR = 1 
const STAT_TEXT = ['STR: ', 'DEX: ', 'CON: ', 'INT: ', 'WIS: ', 'CHA: ']

function Standard() {
    const stat_id = [0, 1, 2, 3, 4, 5]
    const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))

    const alter_stat = useCallback((stat, change) => {
		const new_stats = [...base_stat]
		new_stats[stat] = change
		set_stat(new_stats)
	}, [base_stat])

    return (
        <div className=''>
            {stat_id.map((stat) =>
                <div className='standard_stat'>
                    {`${STAT_TEXT[stat]} ${base_stat[stat]}`}
                    <Select onChange={(selectedOption) => alter_stat(stat, selectedOption.value)} options={options} />   
                </div>
            )}        
        </div>
    )
}

export default Standard