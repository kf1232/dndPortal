import './App.css';

import CharacterAttributes from '../CharacterAttributes/CharacterAttributes'
import CharacterAncestory from '../CharacterAncestory/CharacterAncestory'
import CharacterBackground from '../CharacterBackground/CharacterBackground';
import CharacterClass from '../CharacterClass/CharacterClass';
import CharacterEqupiment from '../CharacterEqupiment/CharacterEqupiment';

function App() {
	return (
		<div className='app'>
			<div className='app_title'> 
				Title 
			</div>
			<div className='app_race'>
				<CharacterAncestory/>
			</div>
			<div className='app_class'>
				<CharacterClass/>
			</div>
			<div className='app_stat'> 
				<CharacterAttributes/> 
			</div>
			<div className='app_back'> 
				<CharacterBackground/>
			</div>
			<div className='app_equip'> 
				<CharacterEqupiment/>
			</div>
		</div>
	)
}

export default App;