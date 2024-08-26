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
			<input type="text" name='title' placeholder='Title' className={cn(styles['input'], styles['input-title'], {
				[styles['invalid']]: !formValidState.title
			})}/>
			<div className={styles['wrapper-input']}>
				<label htmlFor='date' className={styles['wrapper-extra_data']}>
					<img src="../../../public/calendar.svg" alt="calendar icon" />
					<div className={styles['wrapper-extra_data__text']}>Date</div>
				</label>
				<input type="date" name='date' id='date' className={`${styles['input']} ${formValidState.date ? '' : styles['invalid']}`}/>
			</div>
			<div className={styles['wrapper-input']}>
				<label htmlFor='tag' className={styles['wrapper-extra_data']}>
					<img src="../../../public/folder.svg" alt="calendar icon" />
					<div className={styles['wrapper-extra_data__text']}>Marks</div>
				</label>
				<input type="text" name='tag' id='tag' value={inputData} onChange={inputChange} className={styles['input']}/>
			</div>
			<textarea name="text" id="" cols="30" rows="10" placeholder='Text' className={`${styles['input']} ${formValidState.text ? '' : styles['invalid']}`}></textarea>
		
			<Button text="save" />
		</form>
	);
}
 
export default JournalForm;