import './App.css';
import {useState} from 'react'

import Standard from './components/standard/standard'
import Pointbuy from './components/pointbuy/pointbuy'
import Custom from './components/custom/custom'

function App() {
	const [standard, renderStandard] = useState(true)
	const toggleStandard = () => {renderStandard((prev) => !prev)}
	
	const [pointbuy, renderPointbuy] = useState(true)
	const togglePointbuy = () => {renderPointbuy((prev) => !prev)}

	const [custom, renderCustom] = useState(true)
	const toggleCustom = () => {renderCustom((prev) => !prev)}
 
	return (
		<div>
			<button onClick={toggleStandard}>toggle standard</button>
			{standard ? null : <Standard/> }

			<button onClick={togglePointbuy}>toggle pointbuy</button>
			{pointbuy ? null : <Pointbuy/> }
			

			<button onClick={toggleCustom}>toggle custom</button>
			{custom ? null : <Custom/> }
		</div>
	)
}

export default App;
