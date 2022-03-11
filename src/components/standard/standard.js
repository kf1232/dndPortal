function Standard() {
    var point_buy = [15, 14, 13, 12, 10, 8]
    var stats = new Array(6).fill('-')
    var S = {'STR': 1, 'DEX':2, 'CON':3, 'INT':4, "WIS":5, "CHA":6}

    return (
        <div className='STANDARD'>
            <div>
                <select id='STR' name='str'>
                    {point_buy.forEach((val) => {
                        <option value={val}>{val}</option>
                    })}
                </select>
            </div>

            <div className='STANDARD_BODY'>
                <span>STR: {stats[S['STR']]} </span><br/>
				<span>DEX: {stats[S['DEX']]} </span><br/>
				<span>CON: {stats[S['CON']]} </span><br/>
				<span>INT: {stats[S['STR']]} </span><br/>
				<span>WIS: {stats[S['STR']]} </span><br/>
				<span>CHA: {stats[S['STR']]} </span><br/>
            </div>
        </div>
    )
}

export default Standard