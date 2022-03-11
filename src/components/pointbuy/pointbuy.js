import {useState, useCallback, useEffect} from 'react'

function Pointbuy() {
              // 08 09 10 11 12 13 14 15 16 17 18 19 20   stat
              // -1 -1  0  0  1  1  2  2  3  3  4  4  5   bonus
              //  0  1  2  3  4  5  7  9  -  -  -  -  -   cost
	const cost = [0, 1, 2, 3, 4, 5, 7, 9]

	const STAT_FLOOR = 8
	const STAT_CELING = 15

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

	const[point_pool, set_pool] = useState(27)
	useEffect( () => {
		set_pool(27 - cost[base_str-STAT_FLOOR] - cost[base_dex-STAT_FLOOR] - cost[base_con-STAT_FLOOR] - cost[base_int-STAT_FLOOR] - cost[base_wis-STAT_FLOOR] - cost[base_cha-STAT_FLOOR])
	}, [base_str, base_dex, base_con, base_int, base_wis, base_cha])

	return (
		<div className='POINTBUY'>
			<div className='POINTBUY_HEADER'> 
				POINT BUY: {point_pool} / 27
			</div>
			<div className='POINTBUY_BODY'>
				<span>STR: {base_str} COST: {cost[base_str-STAT_FLOOR]}</span>
				<button onClick={function() {increaseSTR(5)}}>+</button>
				<button onClick={function() {decSTR()}}>-</button><br/>

				<span>DEX: {base_dex} COST: {cost[base_dex-STAT_FLOOR]}</span>
				<button onClick={function() {increaseDEX()}}>+</button>
				<button onClick={function() {decDEX()}}>-</button><br/>

				<span>CON: {base_con} COST: {cost[base_con-STAT_FLOOR]}</span>
				<button onClick={function() {increaseCON()}}>+</button>
				<button onClick={function() {decCON()}}>-</button><br/>

				<span>INT: {base_int} COST: {cost[base_int-STAT_FLOOR]}</span>
				<button onClick={function() {increaseINT()}}>+</button>
				<button onClick={function() {decINT()}}>-</button><br/>

				<span>WIS: {base_wis} COST: {cost[base_wis-STAT_FLOOR]}</span>
				<button onClick={function() {increaseWIS()}}>+</button>
				<button onClick={function() {decWIS()}}>-</button><br/>

				<span>CHA: {base_cha} COST: {cost[base_cha-STAT_FLOOR]}</span>
				<button onClick={function() {increaseCHA()}}>+</button>
				<button onClick={function() {decCHA()}}>-</button><br/>
			</div>
			<div className='POINTBUY_FOOTER'>
				POINT BUY FOOTER
			</div>
		</div>
	)
}

export default Pointbuy