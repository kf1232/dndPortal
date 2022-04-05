import './app.css';

import CharStat from '../charStat/charStat'
import CharRace from '../charRace/charRace'
import CharBackground from '../charBack/charBack';
import CharClass from '../charClass/charClass';
import CharEquip from '../charEquip/charEquip';

function App() {
	return (
		<div className='app'>
			<div className='app_title'> 
				Title 
			</div>
			<div className='app_race'> 
				<CharRace/>
			</div>
			<div className='app_class'> 
				<CharClass/>
			</div>
			<div className='app_stat'> 
				<CharStat/> 
			</div>
			<div className='app_back'> 
				<CharBackground/>
			</div>
			<div className='app_equip'> 
				<CharEquip/>
			</div>
		</div>
	)
}

export default App;