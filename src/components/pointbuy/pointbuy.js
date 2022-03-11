import {useState, useCallback, useEffect} from 'react'
const cost = [0, 1, 2, 3, 4, 5, 7, 9]

const STAT_FLOOR = 8
const STAT_CELING = 15

const STATS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
const STR= 0
const DEX= 1
const CON= 2
const INT= 3
const WIS= 4
const CHA= 5

function Pointbuy() {
	// 08 09 10 11 12 13 14 15 16 17 18 19 20   stat
	// -1 -1  0  0  1  1  2  2  3  3  4  4  5   bonus
	//  0  1  2  3  4  5  7  9  -  -  -  -  -   cost

	const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))
	const [point_pool, set_pool] = useState(27)

	useEffect( () => {
		set_pool(27 - cost[base_stat[STR]-STAT_FLOOR] - cost[base_stat[DEX]-STAT_FLOOR] 
			        - cost[base_stat[CON]-STAT_FLOOR] - cost[base_stat[INT]-STAT_FLOOR] 
					- cost[base_stat[WIS]-STAT_FLOOR] - cost[base_stat[CHA]-STAT_FLOOR])
	}, [base_stat])

	const alter_stat = useCallback((stat, change) => {
		if(change > 0)
			if(point_pool < cost[base_stat[stat]-STAT_FLOOR+1] - cost[base_stat[stat]-STAT_FLOOR])
				return

		const new_stats = [...base_stat]
		new_stats[stat] = Math.min(Math.max(new_stats[stat] + change, STAT_FLOOR), STAT_CELING)
		set_stat(new_stats)
	}, [base_stat, point_pool])
	

	
	
	return (
		<div className='POINTBUY'>
			<div className='POINTBUY_HEADER'> 
				POINT BUY: {point_pool} / 27
			</div>
			<div className='POINTBUY_BODY'>
				<span>STR: {base_stat[STR]} COST: {cost[base_stat[STR]-STAT_FLOOR]}</span>
				<button onClick={function() {alter_stat(0, 1)}}>+</button>
				<button onClick={function() {alter_stat(0,-1)}}>-</button><br/>

				<span>DEX: {base_stat[DEX]} COST: {cost[base_stat[DEX]-STAT_FLOOR]}</span>
				<button onClick={function() {alter_stat(1, 1)}}>+</button>
				<button onClick={function() {alter_stat(1,-1)}}>-</button><br/>

				<span>CON: {base_stat[CON]} COST: {cost[base_stat[CON]-STAT_FLOOR]}</span>
				<button onClick={function() {alter_stat(2, 1)}}>+</button>
				<button onClick={function() {alter_stat(2,-1)}}>-</button><br/>

				<span>INT: {base_stat[INT]} COST: {cost[base_stat[INT]-STAT_FLOOR]}</span>
				<button onClick={function() {alter_stat(3, 1)}}>+</button>
				<button onClick={function() {alter_stat(3,-1)}}>-</button><br/>

				<span>WIS: {base_stat[WIS]} COST: {cost[base_stat[WIS]-STAT_FLOOR]}</span>
				<button onClick={function() {alter_stat(4, 1)}}>+</button>
				<button onClick={function() {alter_stat(4,-1)}}>-</button><br/>

				<span>CHA: {base_stat[CHA]} COST: {cost[base_stat[CHA]-STAT_FLOOR]}</span>
				<button onClick={function() {alter_stat(5, 1)}}>+</button>
				<button onClick={function() {alter_stat(5,-1)}}>-</button><br/>
			</div>
		</div>
	)
}

export default Pointbuy

/* Graveyard
	const [base_str, set_str] = useState(STAT_FLOOR)
	const increaseSTR = () => {set_str((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })}
	const decSTR = () => {set_str((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	const [base_dex, set_dex] = useState(STAT_FLOOR)
	const increaseDEX = () => {set_dex((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decDEX = () => {set_dex((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}
	
	const [base_con, set_con] = useState(STAT_FLOOR)
	const increaseCON = () => {set_con((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decCON = () => {set_con((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	const [base_int, set_int] = useState(STAT_FLOOR)
	const increaseINT = () => {set_int((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decINT = () => {set_int((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}
		
	const [base_wis, set_wis] = useState(STAT_FLOOR)
	const increaseWIS = () => {set_wis((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decWIS = () => {set_wis((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	const [base_cha, set_cha] = useState(STAT_FLOOR)
	const increaseCHA = () => {set_cha((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decCHA = () => {set_cha((prev) => {return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}
*/