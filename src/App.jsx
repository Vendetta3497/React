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
// import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import {  UserContextProvider } from './context/user.context.jsx';




function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}


function App() {

		 const [items, setItems] = useLocalStorage('data');
		 
		

		 const addItem =(item) => {
		setItems([...mapItems(items), {
			...item,
			date: new Date(item.date),
			id: items.length > 0 ? items.length + 1 : 1
		}]);
		 };
		 
	

	return (
		<UserContextProvider>
			<LeftPanel>
				<Header/>
				<JouranlAddButton/>
				<JournalList items={mapItems(items)}/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</UserContextProvider>
	);
}

export default App; 



