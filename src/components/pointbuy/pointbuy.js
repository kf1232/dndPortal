import {useState} from 'react'

function Pointbuy() {
    // 08 09 10 11 12 13 14 15 16 17 18 19 20   stat
    // -1 -1  0  0  1  1  2  2  3  3  4  4  5   bonus
    //  0  1  2  3  4  5  7  9					cost
	const cost = [0, 1, 2, 3, 4, 5, 7, 9]
	const STAT_FLOOR = 8
	const STAT_CELING= 15

    const [base_str, set_str] = useState(8)
	const increaseSTR = () => {set_str((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })}
	const decSTR = () => {set_str((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	const [base_dex, set_dex] = useState(8)
	const increaseDEX = () => {set_dex((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decDEX = () => {set_dex((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}
	
	const [base_con, set_con] = useState(8)
	const increaseCON = () => {set_con((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decCON = () => {set_con((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	const [base_int, set_int] = useState(8)
	const increaseINT = () => {set_int((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decINT = () => {set_int((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}
		
	const [base_wis, set_wis] = useState(8)
	const increaseWIS = () => {set_wis((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decWIS = () => {set_wis((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	const [base_cha, set_cha] = useState(8)
	const increaseCHA = () => {set_cha((prev) => { return prev + 1 > STAT_CELING ? STAT_CELING : prev + 1 })} 
	const decCHA = () => {set_cha((prev) => { return prev - 1 < STAT_FLOOR ? STAT_FLOOR : prev - 1 })}

	return (
		<div className='POINTBUY'>
			<div className='POINTBUY_HEADER'>
				POINT BUY: 
			</div>
			<div className='POINTBUY_BODY'>
				<span> STR: {base_str} COST: {cost[base_str-STAT_FLOOR]} </span><button onClick={increaseSTR}>+</button><button onClick={decSTR}>-</button><br/>
				<span> DEX: {base_dex} COST: {cost[base_dex-STAT_FLOOR]} </span><button onClick={increaseDEX}>+</button><button onClick={decDEX}>-</button><br/>
				<span> CON: {base_con} COST: {cost[base_con-STAT_FLOOR]} </span><button onClick={increaseCON}>+</button><button onClick={decCON}>-</button><br/>
				<span> INT: {base_int} COST: {cost[base_int-STAT_FLOOR]} </span><button onClick={increaseINT}>+</button><button onClick={decINT}>-</button><br/>
				<span> WIS: {base_wis} COST: {cost[base_wis-STAT_FLOOR]} </span><button onClick={increaseWIS}>+</button><button onClick={decWIS}>-</button><br/>
				<span> CHA: {base_cha} COST: {cost[base_cha-STAT_FLOOR]} </span><button onClick={increaseCHA}>+</button><button onClick={decCHA}>-</button><br/>
			</div>
			<div className='POINTBUY_FOOTER'>
				POINT BUY FOOTER
			</div>
		</div>
	)
}

export default Pointbuy