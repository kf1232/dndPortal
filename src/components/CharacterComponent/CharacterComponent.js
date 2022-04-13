import axios from 'axios'
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import GridData from '../GridData/GridData'
import SelectData from '../SelectData/SelectData'

function CharacterComponent(props){
	const [loading, setLoading] = useState(true)
	const [query, setQuery] = useState([])
	const [selected, setSelected] = useState('')

	var path = 'http://localhost:3004/' + props.data

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const queryResponse = await axios.get(path)
				setQuery(queryResponse.data)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	function handleSelect(selectedValue = '') {
		setSelected(selectedValue)
	}

	return(
		<div className="characterComponent">
			<div className='title'> Title </div>
			<div className='info'> Info </div> 
			<div className="quickActions">
				Quick Actions {selected}
				<button onClick={() => handleSelect("")}> Reset </button>
			</div>
			<div className={ selected ? 'selectContainer' : "gridContainer"}>
				{selected !== '' ?
						<SelectData data={query[selected]}/>		
					:
					loading ? 
						'Loading'
						:
						<GridData data={query} onClick={handleSelect}/>
				}
			</div>
		</div>
	)
}

CharacterComponent.propTypes = {
	props: PropTypes.any,
	data: PropTypes.string,
}

export default CharacterComponent

/*

*/