import './App.css';
// import Button from './components/Button/Button.jsx';
// import CardButton from './components/CardButton/CardButton.jsx';
// import JournalItem from './components/JournalItem/JournalItem.jsx';
import Header from './components/Header/Header.jsx';
import LeftPanel from './layout/LeftPanel/LeftPanel.jsx';
import JouranlAddButton from './components/JouranlAddButton/JouranlAddButton.jsx';
import Body from './layout/Boby/Body.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useState } from 'react';


function App() {
  
	// return React.createElement('div', {}, 'Project');
	const INNITIA_DATA = [
		// {	
		// 	id: 1,
		// 	title: 'Подготовка к обновлению курсов',
		// 	text: 'Сегодня провёл весь день за...',
		// 	date: new Date()
		// },
		// {	
		// 	id: 2,
		// 	title: 'Поход в годы',
		// 	text: 'Думал, что очень много време...',
		// 	date:new Date()
		// },
		// {	
		// 	title: 'Первая заметка',
		// 	text: 'Создал первую заметку, чтобы ...',
		// 	date:new Date()
		// }
	];
		 const [items, setItems] = useState(INNITIA_DATA);

		 const addItem =(item) => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: oldItems.length > 0 ? oldItems.length + 1 : 1
		}]);
		 };
	

	return (
		<>
			<LeftPanel>
				<Header/>
				<JouranlAddButton/>
				<JournalList items={items}>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
			

		</>
	);
}

export default App;



