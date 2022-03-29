import './app.css';
import {useState} from 'react'

import './app.css'

import Standard from '../standard/standard'
import Pointbuy from '../pointbuy/pointbuy'
import Custom from '../custom/custom'
import Banner from '../banner/banner'

function App() {
	const [standard, renderStandard] = useState(true)
	const toggleStandard = () => {renderStandard((prev) => !prev)}
	
	const [pointbuy, renderPointbuy] = useState(true)
	const togglePointbuy = () => {renderPointbuy((prev) => !prev)}

	const [custom, renderCustom] = useState(true)
	const toggleCustom = () => {renderCustom((prev) => !prev)}
 
	return (
		<div> 
			<Banner/>
			<button onClick={toggleStandard}>toggle standard</button>
			<button onClick={togglePointbuy}>toggle pointbuy</button>
			<button onClick={toggleCustom}>toggle custom</button>

			{standard ? null : <Standard class = 'standard'/> }
			{pointbuy ? null : <Pointbuy class = 'pointbuy'/> }
			{custom   ? null : <Custom   class = 'custom'/> }
			{ /* <Footer/> */} 
		</div>
	)
}

export default App;
