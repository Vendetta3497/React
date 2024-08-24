import './JournalItem.css';

function JournalItem({title, text, date}) {
	// const title = 'Preparing for uplouded the courses';
	// const date = new Date();
	// const text = 'There were dozens of speakers here at the Republican convention on Monday – politicians, conservative activists and ordinary citizens. But the star of the';
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