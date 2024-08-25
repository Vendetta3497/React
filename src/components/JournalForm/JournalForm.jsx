import Button from '../Button/Button';
import styles from'./JournalForm.module.css';
import { useState } from 'react';
import cn from 'classnames';

function JournalForm({ onSubmit }) {

	const [inputData, setInputData] = useState('');
	// const [state, setState] = useState({
	// 	age:31
	// });

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
		
		
	};

	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	
	const  addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		}
		else {
			setFormValidState(state => ({...state, title: true}));
		}
		if (!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		}
		else {
			setFormValidState(state => ({...state, text: true}));
		}
		if (!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		}
		else {
			setFormValidState(state => ({...state, date: true}));
		}
		if (!isFormValid) {
			return;
		}
		
		onSubmit(formProps);
		
      
	};
 
	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			{/* {state.age} */}
			<input type="text" name='title' className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.title
			})}/>
			<input type="date" name='date'  className={`${styles['input']} ${formValidState.date ? '' : styles['invalid']}`}/>
			<input type="text" name='tag' value={inputData} onChange={inputChange}/>
			<textarea name="text" id="" cols="30" rows="10"  className={`${styles['input']} ${formValidState.text ? '' : styles['invalid']}`}></textarea>
			<Button text="save" />
		</form>
	);
}
 
export default JournalForm;