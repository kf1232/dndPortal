import './app.css';

import CharacterComponent from '../CharacterComponent/CharacterComponent'
import CharacterAttributes from '../CharacterAttributes/CharacterAttributes'
import CharacterEquipment from '../CharacterEquipment/CharacterEquipment'

function App() {
	return (
		<div className='app'>
			<CharacterComponent data={'Ancestry'}/>
			<CharacterComponent data={'Class'}/>
			<CharacterComponent data={'Background'}/>
			<CharacterAttributes/>
			<CharacterEquipment/>
		</div>
	)
}

export default App;

/*

*/