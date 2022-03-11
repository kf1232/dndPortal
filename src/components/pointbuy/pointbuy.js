import {useState, useCallback, useEffect} from 'react'
	// 08 09 10 11 12 13 14 15 16 17 18 19 20   stat
	// -1 -1  0  0  1  1  2  2  3  3  4  4  5   bonus
	//  0  1  2  3  4  5  7  9  -  -  -  -  -   COST

const S = [0, 1, 2, 3, 4, 5]
const COST =[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 7, 9]
const STAT_FLOOR = 8;                 const STAT_CELING = 15

const STR= 0, DEX= 1, CON= 2, INT= 3, WIS= 4, CHA= 5

function Pointbuy() {

	const [base_stat, set_stat] = useState(new Array(6).fill(STAT_FLOOR))
	const [point_pool, set_pool] = useState(27)

	useEffect( () => {
		set_pool(27 - COST[base_stat[STR]] - COST[base_stat[DEX]] 
			        - COST[base_stat[CON]] - COST[base_stat[INT]] 
					- COST[base_stat[WIS]] - COST[base_stat[CHA]])
	}, [base_stat])

	const alter_stat = useCallback((stat, change) => {
		if(change > 0)
			if(point_pool < COST[base_stat[stat]+1] - COST[base_stat[stat]])
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
				{S.map((obj)=> {
					<div>
						<span>STR: {base_stat[obj]} COST: {COST[base_stat[obj]]}</span>
						<button onClick={function() {alter_stat(obj, 1)}}>+</button>
						<button onClick={function() {alter_stat(obj,-1)}}>-</button><br/>
					</div>
				})}
				<span>STR: {base_stat[STR]} COST: {COST[base_stat[STR]]}</span>
				<button onClick={function() {alter_stat(STR, 1)}}>+</button>
				<button onClick={function() {alter_stat(STR,-1)}}>-</button><br/>

				<span>DEX: {base_stat[DEX]} COST: {COST[base_stat[DEX]]}</span>
				<button onClick={function() {alter_stat(DEX, 1)}}>+</button>
				<button onClick={function() {alter_stat(DEX,-1)}}>-</button><br/>

				<span>CON: {base_stat[CON]} COST: {COST[base_stat[CON]]}</span>
				<button onClick={function() {alter_stat(CON, 1)}}>+</button>
				<button onClick={function() {alter_stat(CON,-1)}}>-</button><br/>

				<span>INT: {base_stat[INT]} COST: {COST[base_stat[INT]]}</span>
				<button onClick={function() {alter_stat(INT, 1)}}>+</button>
				<button onClick={function() {alter_stat(INT,-1)}}>-</button><br/>

				<span>WIS: {base_stat[WIS]} COST: {COST[base_stat[WIS]]}</span>
				<button onClick={function() {alter_stat(WIS, 1)}}>+</button>
				<button onClick={function() {alter_stat(WIS,-1)}}>-</button><br/>

				<span>CHA: {base_stat[CHA]} COST: {COST[base_stat[CHA]]}</span>
				<button onClick={function() {alter_stat(CHA, 1)}}>+</button>
				<button onClick={function() {alter_stat(CHA,-1)}}>-</button><br/>
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