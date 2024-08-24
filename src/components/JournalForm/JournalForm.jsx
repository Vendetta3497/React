import Button from '../Button/Button';
import './JournalForm.css';
import { useState } from 'react';
function JournalForm({ onSubmit }) {

	const [inputData, setInputData] = useState('');
	// const [state, setState] = useState({
	// 	age:31
	// });

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
		
		
	};

	const  addJournalItem = (e) => {
		// state.age = 40;
		// setState(state);
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
		
      
	};
 
	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			{/* {state.age} */}
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag' value={inputData} onChange={inputChange} />
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="save" onClick={() => {
				console.log('this');
				
				
			}}/>
		</form>
	);
}
 
export default JournalForm;