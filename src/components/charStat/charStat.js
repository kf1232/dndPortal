import './charStat.css'
import Custom from './custom'
import PointBuy from './pointbuy'
import Standard from './standard'

import {useState, useCallback} from 'react'

function CharStat(){
    const POINTBUY = 0, STANDARD =1, CUSTOM = 2
    const [BaseStat, setBaseStat] = useState([0, 0, 0])

    const selectBase = useCallback((input) => {
        const newBase = [0,0,0]
        newBase[input] = 1
        console.log(BaseStat)
        setBaseStat(newBase)
	}, [BaseStat])

    return(
        <div className='char'>
            <div className='char_title'>
                Core Stat Builder
            </div>
            <div className='char_actions'>
                <button className='char_pointbuy'
                        onClick={function() {selectBase(POINTBUY)}}
                        > Point Buy </button>
                <button className='char_standard'
                        onClick={function() {selectBase(STANDARD)}}
                        > Standard </button>
                <button className='char_custom'
                        onClick={function() {selectBase(CUSTOM)}}
                        > Custom </button>
            </div>
            <div className='char_body'>
                { BaseStat[POINTBUY] ? <PointBuy/> : null }
                { BaseStat[STANDARD] ? <Standard/> : null }
                { BaseStat[CUSTOM]   ? <Custom/>   : null }
            </div>
        </div>
    )
}

export default CharStat