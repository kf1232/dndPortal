import './_selector.css'
import {useState, useCallback} from 'react'

import Standard from './standard'
import Custom   from './custom'
import Pointbuy from './pointbuy'

 function BaseStats() {
    const POINTBUY = 0, STANDARD =1, CUSTOM = 2
    const [BaseStat, setBaseStat] = useState([0, 0, 0])

    const selectBase = useCallback((input) => {
        const newBase = [0,0,0]
        newBase[input] = 1
        console.log(BaseStat)
        setBaseStat(newBase)
	}, [BaseStat])
 
    return(
        <div className='bs_main'>
            <div className='bs_selector'>
                <button className='bs_button' onClick={function() {selectBase(POINTBUY)}}>Point Buy</button>
                <button className='bs_button' onClick={function() {selectBase(STANDARD)}}>Standard Array</button>
                <button className='bs_button' onClick={function() {selectBase(CUSTOM)}}>Custom</button>
            </div>
            <div className='bs_body'>
                {BaseStat[POINTBUY] ? <Pointbuy/> : null }
                {BaseStat[STANDARD] ? <Standard/> : null}
                {BaseStat[CUSTOM] ? <Custom/> : null}
            </div>
        </div>
    )
}

export default BaseStats