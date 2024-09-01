import './JournalItem.css';

function JournalItem({title, text, date}) {

	


	const correctDate = new Intl.DateTimeFormat('ru-RU', 
		{
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		}
	).format(date);
 
  
   

	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<div className='journal-item__body'>
				<div className='journal-item__date'>{correctDate}</div>
				<div className='journal-item__text'>{text}</div>
			</div>
		</>
	);
}

export default JournalItem;