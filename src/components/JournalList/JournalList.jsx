import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem.jsx';
import CardButton from '../CardButton/CardButton.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.jsx';



function JournalList({ items }) {

	const { userId } = useContext(UserContext);
	console.log(userId);
	
	
	if (items.length === 0 ) {
	 return <div className='meassage'>Empty</div>;
	}

	const sortItems = (a, b) => {
		return  b.id - a.id;
		 };
		 console.log(items);
		 

	return <div className='journal-list'>{items
		.filter(el => el.userId === userId)
		.sort(sortItems)
		.map(el => (
			<CardButton key={el.id}>
				<JournalItem
					title={el.title}
					text={el.text}
					date={el.date}
				/>
			</CardButton>
		))}</div>;
}
 
export default JournalList;