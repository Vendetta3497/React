import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem.jsx';
import CardButton from '../CardButton/CardButton.jsx';


function JournalList({ items }) {
	
	if (items.length === 0 ) {
	 return <p>Empty</p>;
	}

	const sortItems = (a, b) => {
		return  b.id - a.id;
		 };

	return <div className='journal-list'>{items.sort(sortItems).map(el => 
		<CardButton key={el.id}>
			<JournalItem
				title={el.title}
				text={el.text}
				date={el.date}
			/>
		</CardButton>
	)}</div>;
}
 
export default JournalList;