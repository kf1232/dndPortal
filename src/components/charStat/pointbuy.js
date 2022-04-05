import './charStat_body.css'

import {useState, useCallback, useEffect} from 'react'

	// 08 09 10 11 12 13 14 15 16 17 18 19 20   stat
	// -1 -1  0  0  1  1  2  2  3  3  4  4  5   bonus
	//  0  1  2  3  4  5  7  9  -  -  -  -  -   COST

function Pointbuy() {
	const STAT_TEXT = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
	const COST_TEXT = 'COST'
	const STR= 0, DEX= 1, CON= 2, INT= 3, WIS= 4, CHA= 5, STAT_FLOOR = 8, STAT_CELING = 15
	const stat_id = [0, 1, 2, 3, 4, 5]
	const COST = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 7, 9]

	const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))
	const [point_pool, set_pool] = useState(27)

	useEffect( () => {
		set_pool(27 - COST[base_stat[STR]] - COST[base_stat[DEX]]  - COST[base_stat[CON]] - COST[base_stat[INT]] - COST[base_stat[WIS]] - COST[base_stat[CHA]])
	}, [base_stat])

	const alter_stat = useCallback((stat, change) => {
		if(change > 0)
			if(point_pool < COST[base_stat[stat]+1] - COST[base_stat[stat]])
				return

		const new_stats = [...base_stat]
		new_stats[stat] = Math.min(Math.max(new_stats[stat] + change, STAT_FLOOR), STAT_CELING)
		set_stat(new_stats)
	}, [base_stat, point_pool])

	const reset_stat = useCallback(() => {
		const new_stats = new Array(6).fill(STAT_FLOOR)
		set_stat(new_stats)
	})
	
	return (
		<div className='statbuilder'>
			<div className='statbuilder_info'>
				Point Buy : Pool {point_pool} / 27
			</div>
			<div className='statbuilder_actions'>
				<button className='statbuilder_reset'
						onClick={ function() {reset_stat()} }>
						Reset Stats
				</button>
			</div>
			<div className='statbuilder_body'>	
				{stat_id.map((stat)=> 
					<div className='statbuilder_stat'>
						<div className='stat_name'>
							{STAT_TEXT[stat] + ' ' + base_stat[stat]} 
						</div>
						<div className='stat_cost'>
						 	{COST_TEXT + ' ' + COST[base_stat[stat]]} 
						</div>
						<button className='stat_dec' onClick={function() {alter_stat(stat,-1)}}>
								-
						</button>
						<button className='stat_inc' onClick={function() {alter_stat(stat, 1)}}>
								+
						</button>
					</div>
				)}
			</div>
			
		</div>
	)
}

export default Pointbuy