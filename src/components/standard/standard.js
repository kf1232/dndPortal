import {useState} from 'react'

function Standard() {
    const [str, set_str] = useState(0)
	const increaseSTR = () => {set_str((prev) => { return prev + 1 > 20 ? 20 : prev + 1 })}
	const decSTR = () => {set_str((prev) => { return prev - 1 < 0 ? 0 : prev - 1 })}

	const [dex, set_dex] = useState(0)
	const increaseDEX = () => {set_dex((prev) => { return prev + 1 > 20 ? 20 : prev + 1 })} 
	const decDEX = () => {set_dex((prev) => { return prev - 1 < 0 ? 0 : prev - 1 })}
	
	const [con, set_con] = useState(0)
	const increaseCON = () => {set_con((prev) => { return prev + 1 > 20 ? 20 : prev + 1 })} 
	const decCON = () => {set_con((prev) => { return prev - 1 < 0 ? 0 : prev - 1 })}

	const [int, set_int] = useState(0)
	const increaseINT = () => {set_int((prev) => { return prev + 1 > 20 ? 20 : prev + 1 })} 
	const decINT = () => {set_int((prev) => { return prev - 1 < 0 ? 0 : prev - 1 })}
		
	const [wis, set_wis] = useState(0)
	const increaseWIS = () => {set_wis((prev) => { return prev + 1 > 20 ? 20 : prev + 1 })} 
	const decWIS = () => {set_wis((prev) => { return prev - 1 < 0 ? 0 : prev - 1 })}

	const [cha, set_cha] = useState(0)
	const increaseCHA = () => {set_cha((prev) => { return prev + 1 > 20 ? 20 : prev + 1 })} 
	const decCHA = () => {set_cha((prev) => { return prev - 1 < 0 ? 0 : prev - 1 })}

    return (
        <div className='STANDARD'>
            <div className='STANDARD_HEADER'>
                STANDARD POINT BUY HEADER
            </div>
            <div className='STANDARD_BODY'>
                <span> STR:  {str} </span><button onClick={increaseSTR}>+</button><button onClick={decSTR}>-</button><br/>
				<span> DEX:  {dex} </span><button onClick={increaseDEX}>+</button><button onClick={decDEX}>-</button><br/>
				<span> CON:  {con} </span><button onClick={increaseCON}>+</button><button onClick={decCON}>-</button><br/>
				<span> INT:  {int} </span><button onClick={increaseINT}>+</button><button onClick={decINT}>-</button><br/>
				<span> WIS:  {wis} </span><button onClick={increaseWIS}>+</button><button onClick={decWIS}>-</button><br/>
				<span> CHA:  {cha} </span><button onClick={increaseCHA}>+</button><button onClick={decCHA}>-</button><br/>
            </div>
            <div className='STANDARD_FOOTER'>
                STANDARD POINT BUY FOOTER
            </div>
        </div>
    )
}

export default Standard